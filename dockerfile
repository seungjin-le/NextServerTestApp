# 1. Node.js 이미지 선택
FROM node:18-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. Next.js 애플리케이션 빌드
RUN npm run build

# 6. 경량화된 Node.js 이미지 선택
FROM node:18-alpine AS runner

# 7. 환경 변수 설정
ENV NODE_ENV production

# 8. 작업 디렉토리 설정
WORKDIR /app

# 9. 빌드된 파일 복사
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 10. Next.js 애플리케이션 실행
CMD ["node", "server.js"]