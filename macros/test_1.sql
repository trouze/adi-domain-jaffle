{% macro choose_where() %}
    {% if modules.datetime.date.today().day == 21 %}
        {{log('its the 21st!',info=True)}}
    {%else%}
        {{log('its not the 21st', info=True)}}
    {%endif%}
{% endmacro %}