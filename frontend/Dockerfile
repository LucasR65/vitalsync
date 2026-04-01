# =============================================================================
# Dockerfile VitalSync Frontend
#
# Image Nginx alpine choisie car :
# - Légère (25MB à 140MB pour nginx:latest basée sur Debian)
# - Nginx est uniquement un serveur de fichiers statiques ici, aucun outil supplémentaire est nécessaire.
# - Surface minimale en production.
# =============================================================================

# Etape 1

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]