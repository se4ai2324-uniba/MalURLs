FROM prom/prometheus

COPY prometheus.yml /etc/prometheus/

# Specifica la porta su cui Prometheus ascolterà le richieste
EXPOSE 9090

# Avvia il server Prometheus
ENTRYPOINT [ "prometheus", "--config.file=/etc/prometheus/prometheus.yml", "--web.external-url=http://localhost:9090" ] 