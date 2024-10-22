{% macro log_env() %}
{{ log('environment type',info=true) }}
{{ log(env_var('DBT_CLOUD_ENVIRONMENT_TYPE'),info=true) }}
{{ log('pr number: ',info=true) }}
{{ log(env_var('DBT_CLOUD_PR_ID'),info=true) }}

{% endmacro %}