from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.api import router
from app.config import get_settings
from app.database import create_schema


@asynccontextmanager
async def lifespan(_: FastAPI):
    create_schema()
    yield


settings = get_settings()
static_dir = Path(__file__).parent / "static"
app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    description="Manufacturing structure, process data and mold lifecycle driven cost evolution.",
    lifespan=lifespan,
)
app.include_router(router)
app.mount("/assets", StaticFiles(directory=static_dir), name="assets")


@app.get("/", include_in_schema=False)
def dashboard() -> FileResponse:
    return FileResponse(static_dir / "index.html")
