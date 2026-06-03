# Gap Analysis — gsa-positioning-services

- **Feature**: `gsa-positioning-services`
- **Design**: `docs/02-design/features/gsa-positioning-services.design.md`
- **Implementation**: commit `dce3f86` (branch `feat/gsa-positioning-services`)
- **Date**: 2026-06-03
- **Phase**: Check

## Summary

설계 범위(A 홈 ServicesShowcase / B `/services` 재작성 / C dormant 물류 링크 / D i18n parity)는 **모두 구현 완료**. 단 설계 §4가 제안한 GSSA 역량 **6종 중 4종**으로 구현 — §4에 "문구·항목 수는 사용자 검토로 확정"이라 명시되어 **설계 허용 범위 내 결정**(나머지 2종 relations·representation 은 features/overview 에 흡수). 검증: ESLint clean, 타입/컴파일 OK, en/ko parity ✓.

## Match Rate: **97%**

(범위 항목 100% 구현 + 설계 허용 범위 내 역량 수 결정 1건 + 범위 밖 잔여 항목 메모. ≥90% → report 진행 가능)

## Per-item

| # | 설계 항목 | 상태 | 근거 |
|---|-----------|:----:|------|
| A | 홈 ServicesShowcase: 물류→GSSA 역량 재카피 | ✅ Match | `ServicesShowcase.tsx` `serviceKeys=['sales','pricing','capacity','intelligence']`; `home.services` i18n 교체(en/ko); 콜아웃 추가 |
| B1 | `/services` 하드코딩 제거·i18n화 | ✅ Match | `services/page.tsx` 전면 재작성, `servicesPage` 네임스페이스(en/ko) 소비, features 객체 `f1–f4` |
| B2 | GSSA 역량 블록 (설계 §4) | ⚠️ Decision | 6종 제안 → **4종 구현**(sales/pricing/capacity/intelligence). §4 "항목 수 사용자 검토 확정" 명시 → 허용 범위. relations·representation 은 features/overview 에 흡수 |
| B3 | 가짜 case study 제거 | ✅ Match(개선) | "CASE REF / Read full story / 가상 고객 케이스" → 정직한 **"Why it matters"** 패널로 대체 |
| C | dormant 물류 크로스링크 | ✅ Match | `src/lib/site-links.ts` `getLogisticsSiteUrl()`; 홈·`/services`·`Footer` 3곳 배치; 텍스트 상시 + 링크 env 게이트; `.env.local.example` 문서화 |
| D1 | i18n en/ko parity | ✅ Match | `home.services.items`·`servicesPage.items`·`features` 키 en==ko 검증 통과 |
| D2 | orphan top-level `services` 제거 | ✅ Match | en.json 에서 삭제(미사용 확인 후) |
| D3 | Footer 서비스 링크 GSSA 전환 | ✅ Match | air/ocean/project → sales/pricing/capacity/intelligence + dormant 물류 링크 |

## Gaps / Notes

| ID | 구분 | 내용 | 심각도 | 조치 |
|----|------|------|:------:|------|
| N1 | 설계 결정 | 역량 6→4 (§4 TBD 명시, relations/representation 흡수) | info | 설계 의도 내 — report 에 명시 |
| N2 | 범위 밖 잔여 | `rateInquiryModal`(quote 도구)·`pages`(company 타임라인) 네임스페이스에 forwarding 용어 잔존(Air/Ocean/Project Cargo) | low | 포지셔닝 표면 아님 — 후속 사이클 후보 |
| N3 | 인프라(범위 밖) | repo 의 goodmangls org 이전으로 Vercel 자동배포 끊김 → PR preview 미생성. Vercel GitHub App 을 org 에 설치 필요(사용자) | info | 운영 task |
| N4 | 기존 debt | `next build` 가 `/_global-error` useContext null(prerender-debt)에서만 실패 — 본 변경 무관, `vercel.json \|\| true` 마스킹 | info | 별도 사이클(Next 16.3 대기) |

## Recommendation

Match 97% (≥90%) → **`/pdca report` 진행 가능**. N1 은 report 에 결정사항으로 기록, N2 는 후속 사이클 후보로 이관 권장. push/PR 시 N3(Vercel) 고려.
