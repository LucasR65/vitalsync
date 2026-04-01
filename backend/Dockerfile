# =============================================================================
# Multi-stage build VitalSync API
#
# Pourquoi le multi-stage build :
# - Sécurité : l'image finale ne contient pas les devDependencies (jest,
#   supertest...), réduisant la surface d'attaque.
# - Taille : on part d'une base alpine (~50MB vs ~900MB pour node:20).
#   Les outils de build et de test ne sont jamais embarqués en production.
# - Séparation : si les tests échouent au stage 1, le build s'arrête
#   immédiatement → impossible de déployer une image non testée.
# =============================================================================

# - Etape 1 : Test -
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm test

# - Etape 2 : Production -
FROM node:20-alpine AS production

WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production
COPY --from=builder /app/server.js ./

USER node

EXPOSE 3000

CMD ["node", "server.js"]