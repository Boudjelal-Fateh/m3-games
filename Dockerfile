# ---------- Stage 3: Runner ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy only required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# ✅ FIX: allow Next.js to write cache
RUN mkdir -p /app/.next/cache/images \
    && chown -R nextjs:nextjs /app/.next

USER nextjs

EXPOSE 3000
CMD ["npm", "start"]