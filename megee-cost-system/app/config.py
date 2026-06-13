from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "MEGEE Manufacturing Cost System"
    app_env: str = "development"
    database_url: str = "sqlite:///./megee_cost.db"
    default_currency: str = "CNY"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()
