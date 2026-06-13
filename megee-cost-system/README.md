# MEGEE Manufacturing Cost System V1.0

制造结构、工艺数据和模具生命周期驱动的成本演化与报价 API。系统将 SKU 作为报价容器，成本实际在 Assembly、Part、Routing、Mold 和生产实绩层计算。

![MEGEE dashboard](docs/dashboard-preview.png)

## 已实现能力

- SKU -> Assembly -> Part 产品结构
- 自制件、标准件、外协件三类成本
- 独立 Routing 工艺和设备/人工费率
- Trial / Pilot / Mass 生产实绩修正
- 模具剩余价值和剩余产量摊销
- 成本版本父子树、快照和字段级 Diff
- 新品、新客户、小批量、外协风险加成
- 目标毛利率报价与报价记录持久化
- SQLite 默认运行，`DATABASE_URL` 可切换到 SQLAlchemy 支持的数据库
- 中文成本驾驶舱，一键载入瓶 + 泵 + 盖演示产品
- Alembic 数据库迁移和 GitHub Actions 自动测试
- 推送分支后自动构建 GHCR 容器镜像

## 本地启动

```bash
cd /Users/coady/Documents/Codex/megee-cost-system
python3 -m venv .venv
source .venv/bin/activate
pip install -e '.[dev]'
uvicorn app.main:app --reload
```

打开 `http://127.0.0.1:8000` 进入成本驾驶舱，点击“载入演示产品”即可体验完整流程。

API 文档位于 `http://127.0.0.1:8000/docs`。

## Docker 启动

```bash
docker compose up --build -d
curl http://127.0.0.1:8000/health
```

数据库保存在 Docker volume `megee-data` 中。

## 数据库迁移

```bash
alembic upgrade head
```

Docker 容器启动时会自动执行待应用迁移。生产环境可通过 `DATABASE_URL` 切换 PostgreSQL，例如：

```text
postgresql+psycopg://user:password@db:5432/megee_cost
```

## API

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/catalog/import` | 原子导入或更新完整主数据 |
| `GET` | `/catalog/skus` | 查询 SKU 主数据摘要 |
| `POST` | `/sku/calculate` | 展开 SKU 并返回组件/零件成本明细 |
| `POST` | `/cost/compute` | 计算 Standard/Trial/Pilot/Mass/Adjusted 成本 |
| `POST` | `/production/input` | 输入人工生产记录 |
| `POST` | `/mold/update` | 更新模具累计产量和生命周期 |
| `POST` | `/quotation/generate` | 生成并保存报价 |
| `POST` | `/cost/version/create` | 创建成本版本及不可变快照 |
| `POST` | `/cost/version/diff` | 比较两个成本版本 |
| `GET` | `/cost/versions/{sku_id}` | 查询 SKU 版本时间线 |
| `GET` | `/quotations/{sku_id}` | 查询最近报价记录 |

## 关键计算口径

标准工艺成本：

```text
((machine_rate + labor_rate * labor_count) * cycle_seconds / 3600) / standard_yield
```

有生产实绩时：

```text
process_factor = weighted_actual_cycle / standard_cycle
yield_cost_factor = input_qty / good_qty
actual_process_cost = raw_process_cost * process_factor * yield_cost_factor
```

原始规格中的 `good_qty / total_qty` 是生产良率，不是成本放大系数。若直接乘入成本，会出现良率越低、成本越低的反向结果，因此实现中使用其倒数作为成本因子。

报价采用目标毛利率口径：

```text
risk_adjusted_cost = total_cost * (1 + total_risk_rate)
unit_price = risk_adjusted_cost / (1 - target_margin)
```

## 测试

```bash
pytest
```

测试覆盖主数据导入、标准成本、试模成本演化、生产数据校验、模具更新、成本版本树、Diff 和报价完整流程。

## GitHub 发布

仓库内的 `MEGEE Cost System CI` workflow 会在相关分支更新时：

1. 使用 Python 3.12 安装并运行测试。
2. 在全新数据库上执行 `alembic upgrade head`。
3. 构建并推送容器至 `ghcr.io/<repository-owner>/megee-cost-system`。
