select
    order_id,
    customer_id,
    order_timestamp,
    store_id,
    subtotal,
    tax_paid,
    order_total,
    current_timestamp() as last_model_run
from {{ ref('adi_common', 'stg_orders') }}