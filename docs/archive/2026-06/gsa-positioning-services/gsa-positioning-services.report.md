# Completion Report — gsa-positioning-services

- **Feature**: `gsa-positioning-services`
- **Repo**: `goodmangls/goodman-gsa` (GSSA 사업 전용 사이트)
- **PR**: [#2](https://github.com/goodmangls/goodman-gsa/pull/2) — squash merged → `main` `b353a3a`
- **Match Rate**: 97% (`docs/03-analysis/gsa-positioning-services.analysis.md`)
- **Date**: 2026-06-03
- **Phase**: Completed

## 1. 목표

종합물류가 자매 사이트(`goodman-gls`)로 분리됨에 따라, GSSA 사업 전용 사이트의 **서비스 영역 콘텐츠를 GSSA에 집중**하도록 재정비. 디자인 시스템·레이아웃은 두 사이트 공유(무변경). 머지된 PR #1(network/trust/identity)과 **무중복**.

## 2. 구현 (PR #2)

| 영역 | 변경 |
|------|------|
| 홈 `ServicesShowcase` | "Beyond GSSA — Full logistics" → 항공사 대상 GSSA 역량 4종(영업·요율/일드·capacity·마켓 인텔리전스). `home.services` i18n 교체(en/ko) |
| `/services` | 하드코딩 프로젝트카고 케이스 → GSSA 역량 페이지 전면 재작성 + i18n화(`servicesPage`, en/ko). 가상 case study → 정직한 **"Why it matters"** 패널 |
| dormant 물류 링크 | `src/lib/site-links.ts` `getLogisticsSiteUrl()` (`NEXT_PUBLIC_LOGISTICS_SITE_URL`). 홈·`/services`·Footer 3곳. 텍스트 상시 + 링크 env 게이트 |
| 정리 | orphan top-level `services` i18n 제거, Footer 서비스 링크 GSSA 역량 앵커로 교체, `.env.local.example` 문서화 |

커밋: design `b573316` · impl `dce3f86` · analysis `2ff57a2` → PR #2 squash `b353a3a`.

## 3. 주요 결정

- **역량 6→4**: 설계 §4가 6종을 제안하되 "항목 수는 사용자 검토로 확정"이라 명시 → 4 core(나머지 relations·representation 은 features/overview 에 흡수). 허용 범위 내 결정.
- **가짜 case study 제거**: 기존 페이지의 가상 고객 케이스(CASE REF / Read full story)는 사실이 아니므로 정직한 "Why it matters" 패널로 대체.
- **물류 콜아웃 = 텍스트 상시 + 링크 env 게이트 (확정)**: 설계 논의에서 합의한 "자매 사업 텍스트 언급 가능" 방침대로, 도메인 미연결 상태에서도 브랜드 인지용 문구는 노출하고 클릭 링크만 `NEXT_PUBLIC_LOGISTICS_SITE_URL` 설정 시 활성. env 한 줄로 즉시 켜짐(코드 변경 불필요). 향후 숨김 전환을 원하면 콜아웃 블록을 `logisticsUrl` 조건으로 감싸면 됨.

## 4. 검증

| 항목 | 결과 |
|------|------|
| ESLint | ✅ clean |
| TypeScript 컴파일 | ✅ |
| i18n en/ko parity | ✅ (`home.services`·`servicesPage`·`features`) |
| 컴포넌트 키 해결 | ✅ 85키 전부 문자열 해결 (리터럴 키 렌더 버그 없음 — `getMessage` 폴백 특성상 build 가 못 잡는 부분을 정적 검증) |
| `next build` | ⚠️ 기존 `/_global-error` prerender-debt 에서만 실패 (본 변경 무관, `vercel.json \|\| true` 마스킹) |
| **시각/반응형/테마 런타임 렌더** | ❌ **미검증** — 로컬 dev 서버 실행 거부 + Vercel preview 끊김(org 이전). 머지 강행은 사용자 결정 |

## 5. 후속 (별도 사이클/운영 후보)

| ID | 항목 | 구분 |
|----|------|------|
| F1 | 잔여 forwarding 용어 — `rateInquiryModal`(quote 도구 service type) · `pages`(company 타임라인 "Project Cargo Division Launch" 등) | 후속 사이클 |
| F2 | 시각/반응형/테마 육안 검증 (320/768/1024/1440 + 라이트/다크 + KO 토글) | QA |
| F3 | **Vercel GitHub App 을 goodmangls org 에 설치** → PR preview + 자동배포 복구 | 운영(사용자) |
| F4 | 자매 사이트 도메인 연결 후 `NEXT_PUBLIC_LOGISTICS_SITE_URL` 설정 → 물류 링크 활성 | 운영 |
| F5 | a11y region landmark(`goodman-gls` `242685b`) cherry-port (Footer/TrustBadges 겹침 격리) | 선택 |

## 6. 결과

Match 97% (≥90%). GSSA 전용 포지셔닝(서비스 영역) 사이트 반영 완료, `main` 머지됨. 시각 검증과 Vercel 복구는 운영 후속으로 분리.
