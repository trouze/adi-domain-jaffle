{{ config(
    materialization="ephemeral"
)}}
select
    id,
    customer,
    to_date(ordered_at) as ordered_at,
    store_id,
    subtotal,
    tax_paid,
    order_total,
    load_dts
from {{ source('jaffle_shop', 'raw_orders') }}