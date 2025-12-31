/**
 * Dummy HTML slide data for demonstration
 */
import type { HtmlSlideSource } from './components/HtmlSlideViewer';

export const DEMO_HTML_SLIDES: HtmlSlideSource[] = [
  {
    id: '1',
    type: 'html',
    title: 'Introduction Slide',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 18px; line-height: 1.3; }
.text-xl { font-size: 20px; line-height: 1.2; }
.text-2xl { font-size: 24px; line-height: 1.15; }
.text-3xl { font-size: 30px; line-height: 1.1; }
.text-4xl { font-size: 36px; line-height: 1.05; }
.text-5xl { font-size: 48px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide col center" data-role="slide" style="background:#F7FAFC;">
    <div class="col center" style="gap:24px;">
      <div style="background:#F4B942; border-radius:8px; padding:10px 28px; width:fit-content; margin:0 auto 0 auto;">
        <h1 class="h1 text-4xl" style="color:#24415A; margin:0;">
          Adventure Works Overview
        </h1>
      </div>
      <div style="width:100px; height:4px; background:#F4B942; border-radius:2px; margin:0 auto;"></div>
      <p class="text-xl" style="color:#23272B; margin:0 auto; line-height:1.2; max-width:700px;">
        Professional overview and purpose of Adventure Works as a business analytics sample database.
      </p>
      <p class="text-base" style="color:#23272B; opacity:0.85; margin:0 auto; line-height:1.35; max-width:700px;">
        Welcome to a professional overview of Adventure Works. This presentation introduces the company's core business activities and highlights its importance as a sample database widely used in business and analytics scenarios.
      </p>
    </div>
  </div>
</body>
</html>
</fixed_html>
    `
  },
  {
    id: '2',
    type: 'html',
    title: 'Features List',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 14px; line-height: 1.2; }
.text-xl { font-size: 18px; line-height: 1.2; }
.text-2xl { font-size: 22px; line-height: 1.13; }
.text-3xl { font-size: 28px; line-height: 1.08; }
.text-4xl { font-size: 34px; line-height: 1.05; }
.text-5xl { font-size: 46px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide" data-role="slide">
    <h1 class="h1 text-4xl" style="color:#24415A; margin-bottom:14px;">
      Adventure Works & Business Model
    </h1>
    <div class="col" style="gap:12px;">
      <div class="card" style="background:#FFFFFF; border-radius:8px; padding:12px; box-sizing:border-box; border-left:6px solid #F4B942;">
        <h2 class="h2 text-2xl" style="color:#24415A; margin-bottom:6px;">
          Fictional Company for Learning
        </h2>
        <p class="text-base" style="color:#23272B; margin-bottom:4px;">
          Adventure Works is a fictional manufacturing company created by Microsoft to simulate real-world business operations.
        </p>
        <p class="text-base" style="color:#23272B;">
          Its sample database models an enterprise for training and analytics with realistic data.
        </p>
      </div>
      <div class="card" style="background:#FFFFFF; border-radius:8px; padding:12px; box-sizing:border-box; border-left:6px solid #4B8BBE;">
        <h2 class="h2 text-2xl" style="color:#24415A; margin-bottom:6px;">
          Business Domains
        </h2>
        <div class="col" style="gap:6px;">
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x2699;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Product Design & Manufacturing</p>
          </div>
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x1F6B2;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Inventory & Purchasing</p>
          </div>
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x2192;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Sales & Marketing</p>
          </div>
        </div>
      </div>
      <div class="card" style="background:#F7FAFC; border-left:6px solid #F4B942; border-radius:8px; padding:8px 12px; box-sizing:border-box;">
        <h3 class="text-lg" style="color:#24415A; margin-bottom:4px;">
          Educational Value
        </h3>
        <p class="text-base" style="color:#23272B; margin:0;">
          Adventure Works Cycles never existed. Its sample data mirrors real business processes and is widely used for learning database design and analytics.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
</fixed_html>

    `
  },
  {
    id: '3',
    type: 'html',
    title: 'Data Visualisation',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 18px; line-height: 1.3; }
.text-xl { font-size: 20px; line-height: 1.2; }
.text-2xl { font-size: 24px; line-height: 1.15; }
.text-3xl { font-size: 30px; line-height: 1.1; }
.text-4xl { font-size: 36px; line-height: 1.05; }
.text-5xl { font-size: 48px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide" data-role="slide" style="background:#F7FAFC;">
    <h1 class="h1 text-4xl" style="color:#24415A; margin-bottom:16px;">
      Key Functions & Industry Relevance
    </h1>
    <div class="col" style="gap:12px;">
      <p class="text-base" style="color:#23272B; max-width:800px;">
        Adventure Works models core business domains through distinct schemas. These domains reflect real enterprise operations and support analytics and ERP education.
      </p>
    </div>
    <div class="grid" style="grid-template-columns:1fr 1fr; gap:16px; width:100%; max-width:864px;">
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2605;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Sales</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Manages customer orders, invoices, territories, and promotions.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x26A1;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Production</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Oversees products, inventory, bills of materials, and work orders.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x25A3;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Purchasing</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Handles vendors, purchase orders, and shipping methods.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2713;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Human Resources</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Tracks employee details, shifts, pay history, and departments.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px; grid-column:1/3;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2139;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Person</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Centralizes contact, address, and demographic information.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
</fixed_html>

    `
  },
  {
    id: '4',
    type: 'html',
    title: 'Code Example',
    content: `
      <div style="padding: 40px; background: #2d3748; color: #edf2f7; height: 100%;">
        <h2 style="color: #63b3ed; margin-bottom: 20px;">Code Integration</h2>
        <pre style="background: #1a202c; padding: 20px; border-radius: 10px; overflow: auto; line-height: 1.5;">
<span style="color: #63b3ed;">&lt;HtmlSlideViewer</span>
  <span style="color: #f6ad55;">slides</span>=<span style="color: #4fd1c5;">{mySlides}</span>
  <span style="color: #f6ad55;">showFilmstrip</span>=<span style="color: #4fd1c5;">{true}</span>
  <span style="color: #f6ad55;">filmstripPosition</span>=<span style="color: #e53e3e;">"right"</span>
<span style="color: #63b3ed;">/&gt;</span>
        </pre>
        <p style="margin-top: 20px; color: #a0aec0;">The component handles all the complex iframe management and thumbnail generation internally.</p>
      </div>
    `
  },
  {
    id: '5',
    type: 'url',
    title: 'External Resource',
    content: 'https://example.com'
  },
  {
    id: '6',
    type: 'html',
    title: 'Introduction Slide',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 18px; line-height: 1.3; }
.text-xl { font-size: 20px; line-height: 1.2; }
.text-2xl { font-size: 24px; line-height: 1.15; }
.text-3xl { font-size: 30px; line-height: 1.1; }
.text-4xl { font-size: 36px; line-height: 1.05; }
.text-5xl { font-size: 48px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide col center" data-role="slide" style="background:#F7FAFC;">
    <div class="col center" style="gap:24px;">
      <div style="background:#F4B942; border-radius:8px; padding:10px 28px; width:fit-content; margin:0 auto 0 auto;">
        <h1 class="h1 text-4xl" style="color:#24415A; margin:0;">
          Adventure Works Overview
        </h1>
      </div>
      <div style="width:100px; height:4px; background:#F4B942; border-radius:2px; margin:0 auto;"></div>
      <p class="text-xl" style="color:#23272B; margin:0 auto; line-height:1.2; max-width:700px;">
        Professional overview and purpose of Adventure Works as a business analytics sample database.
      </p>
      <p class="text-base" style="color:#23272B; opacity:0.85; margin:0 auto; line-height:1.35; max-width:700px;">
        Welcome to a professional overview of Adventure Works. This presentation introduces the company's core business activities and highlights its importance as a sample database widely used in business and analytics scenarios.
      </p>
    </div>
  </div>
</body>
</html>
</fixed_html>
    `
  },
  {
    id: '7',
    type: 'html',
    title: 'Features List',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 14px; line-height: 1.2; }
.text-xl { font-size: 18px; line-height: 1.2; }
.text-2xl { font-size: 22px; line-height: 1.13; }
.text-3xl { font-size: 28px; line-height: 1.08; }
.text-4xl { font-size: 34px; line-height: 1.05; }
.text-5xl { font-size: 46px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide" data-role="slide">
    <h1 class="h1 text-4xl" style="color:#24415A; margin-bottom:14px;">
      Adventure Works & Business Model
    </h1>
    <div class="col" style="gap:12px;">
      <div class="card" style="background:#FFFFFF; border-radius:8px; padding:12px; box-sizing:border-box; border-left:6px solid #F4B942;">
        <h2 class="h2 text-2xl" style="color:#24415A; margin-bottom:6px;">
          Fictional Company for Learning
        </h2>
        <p class="text-base" style="color:#23272B; margin-bottom:4px;">
          Adventure Works is a fictional manufacturing company created by Microsoft to simulate real-world business operations.
        </p>
        <p class="text-base" style="color:#23272B;">
          Its sample database models an enterprise for training and analytics with realistic data.
        </p>
      </div>
      <div class="card" style="background:#FFFFFF; border-radius:8px; padding:12px; box-sizing:border-box; border-left:6px solid #4B8BBE;">
        <h2 class="h2 text-2xl" style="color:#24415A; margin-bottom:6px;">
          Business Domains
        </h2>
        <div class="col" style="gap:6px;">
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x2699;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Product Design & Manufacturing</p>
          </div>
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x1F6B2;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Inventory & Purchasing</p>
          </div>
          <div class="row" style="gap:6px;">
            <p class="text-xl" style="color:#F4B942; font-weight:700; margin:0;">&#x2192;</p>
            <p class="text-base" style="color:#23272B; margin:0;">Sales & Marketing</p>
          </div>
        </div>
      </div>
      <div class="card" style="background:#F7FAFC; border-left:6px solid #F4B942; border-radius:8px; padding:8px 12px; box-sizing:border-box;">
        <h3 class="text-lg" style="color:#24415A; margin-bottom:4px;">
          Educational Value
        </h3>
        <p class="text-base" style="color:#23272B; margin:0;">
          Adventure Works Cycles never existed. Its sample data mirrors real business processes and is widely used for learning database design and analytics.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
</fixed_html>

    `
  },
  {
    id: '8',
    type: 'html',
    title: 'Data Visualisation',
    content: `
      <fixed_html>
<!DOCTYPE html>
<html>
<head>
<style>
:root{
  --slide-width: 960px;
  --slide-height: 539px;
  --safe-padding: 48px;
  --spacing: 4px;
  --gap: 16px;
  --radius: 6px;
  --radius-pill: 999em;
  --color-surface: #ffffff;
  --color-surface-foreground: #1d1d1d;
  --color-primary: #1791e8;
  --color-primary-foreground: #fafafa;
  --color-secondary: #1C2833;
  --color-accent: #FE9A4A;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #737373;
  --color-border: #c8c8c8;
  --font-display: Arial, Helvetica, sans-serif;
  --font-content: Arial, Helvetica, sans-serif;
  --fw-display: 600;
  --fw-content: 400;
}
html, body {
  margin: 0;
  padding: 0;
  width: var(--slide-width);
  height: var(--slide-height);
  box-sizing: border-box;
  background: var(--color-surface);
  color: var(--color-surface-foreground);
  font-family: var(--font-content);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.slide {
  width: 960px;
  height: 539px;
  box-sizing: border-box;
  position: relative;
  padding: var(--safe-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  overflow: hidden;
}
.safe-zone {
  padding: var(--safe-padding);
  box-sizing: border-box;
  width: calc(100% - (var(--safe-padding) * 2));
  height: calc(100% - (var(--safe-padding) * 2));
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
  justify-content: flex-start;
  align-content: stretch;
  box-sizing: border-box;
}
.col {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-width { flex: 1 1 auto; min-width: 0; box-sizing: border-box; }
.fill-height { flex: 1 1 auto; min-height: 0; box-sizing: border-box; }
.items-fill-width > * { flex: 1 1 0%; min-width: 0; }
.items-fill-height > * { flex: 1 1 0%; min-height: 0; }
.fit { flex: none; align-self: auto; }
.fit-width { flex: 0 0 auto; }
.fit-height { flex: 0 0 auto; }
.grid { display: grid; gap: var(--gap); box-sizing: border-box; }
* { -webkit-box-sizing: border-box; box-sizing: border-box; }
.text-xs { font-size: 12px; line-height: 1.2; }
.text-sm { font-size: 14px; line-height: 1.25; }
.text-base { font-size: 16px; line-height: 1.35; }
.text-lg { font-size: 18px; line-height: 1.3; }
.text-xl { font-size: 20px; line-height: 1.2; }
.text-2xl { font-size: 24px; line-height: 1.15; }
.text-3xl { font-size: 30px; line-height: 1.1; }
.text-4xl { font-size: 36px; line-height: 1.05; }
.text-5xl { font-size: 48px; line-height: 1.03; }
.h1 { font-family: var(--font-display); font-weight: var(--fw-display); }
.h2 { font-family: var(--font-display); font-weight: 600; }
p, h1, h2, h3, h4, h5, h6, li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0 0 10px 0;
}
.bg-surface { background: var(--color-surface); color: var(--color-surface-foreground); }
.bg-primary { background: var(--color-primary); color: var(--color-primary-foreground); }
.bg-secondary { background: var(--color-secondary); color: var(--color-primary-foreground); }
.bg-muted { background: var(--color-muted); color: var(--color-muted-foreground); }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-muted { color: var(--color-muted-foreground); }
.opacity-0 { opacity: 0; } .opacity-10 { opacity: 0.1; } .opacity-50 { opacity: 0.5; } .opacity-100 { opacity: 1; }
.border { border: 1px solid var(--color-border); border-radius: var(--radius); }
.rounded { border-radius: var(--radius); }
.pill { border-radius: var(--radius-pill); }
.p-0 { padding: 0; } .p-1 { padding: calc(var(--spacing) * 1); }
.p-2 { padding: calc(var(--spacing) * 2); } .p-4 { padding: calc(var(--spacing) * 4); }
.px-4 { padding-left: calc(var(--spacing) * 4); padding-right: calc(var(--spacing) * 4); }
.m-0 { margin: 0; } .mt-2 { margin-top: calc(var(--spacing) * 2); } .mb-2 { margin-bottom: calc(var(--spacing) * 2); }
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 120px;
  padding: 12px;
  border-radius: 8px;
  border: 2px dashed rgba(23, 145, 232, 0.18);
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,251,255,0.96));
  box-sizing: border-box;
}
.aspect-4-3 { aspect-ratio: 4 / 3; }
.aspect-16-9 { aspect-ratio: 16 / 9; }
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  font-size: 13px;
  box-sizing: border-box;
}
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 12px;
  border: 1px solid rgba(14,58,94,0.04);
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.cta {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
}
img { display: block; max-width: 100%; height: auto; }
svg { display: block; max-width: 100%; height: auto; }
</style>
</head>
<body>
  <div class="slide" data-role="slide" style="background:#F7FAFC;">
    <h1 class="h1 text-4xl" style="color:#24415A; margin-bottom:16px;">
      Key Functions & Industry Relevance
    </h1>
    <div class="col" style="gap:12px;">
      <p class="text-base" style="color:#23272B; max-width:800px;">
        Adventure Works models core business domains through distinct schemas. These domains reflect real enterprise operations and support analytics and ERP education.
      </p>
    </div>
    <div class="grid" style="grid-template-columns:1fr 1fr; gap:16px; width:100%; max-width:864px;">
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2605;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Sales</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Manages customer orders, invoices, territories, and promotions.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x26A1;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Production</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Oversees products, inventory, bills of materials, and work orders.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x25A3;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Purchasing</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Handles vendors, purchase orders, and shipping methods.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2713;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Human Resources</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Tracks employee details, shifts, pay history, and departments.
        </p>
      </div>
      <div class="card col" style="border-left:4px solid #F4B942; padding:16px 16px 12px 16px; min-width:0; gap:8px; grid-column:1/3;">
        <div class="row" style="gap:8px; align-items:center;">
          <p style="color:#F4B942; font-size:20px; font-weight:700; margin:0;">&#x2139;</p>
          <p class="text-lg" style="color:#24415A; font-weight:600; margin:0;">Person</p>
        </div>
        <p class="text-sm" style="color:#23272B; margin:0;">
          Centralizes contact, address, and demographic information.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
</fixed_html>

    `
  },
  {
    id: '9',
    type: 'html',
    title: 'Code Example',
    content: `
      <div style="padding: 40px; background: #2d3748; color: #edf2f7; height: 100%;">
        <h2 style="color: #63b3ed; margin-bottom: 20px;">Code Integration</h2>
        <pre style="background: #1a202c; padding: 20px; border-radius: 10px; overflow: auto; line-height: 1.5;">
<span style="color: #63b3ed;">&lt;HtmlSlideViewer</span>
  <span style="color: #f6ad55;">slides</span>=<span style="color: #4fd1c5;">{mySlides}</span>
  <span style="color: #f6ad55;">showFilmstrip</span>=<span style="color: #4fd1c5;">{true}</span>
  <span style="color: #f6ad55;">filmstripPosition</span>=<span style="color: #e53e3e;">"right"</span>
<span style="color: #63b3ed;">/&gt;</span>
        </pre>
        <p style="margin-top: 20px; color: #a0aec0;">The component handles all the complex iframe management and thumbnail generation internally.</p>
      </div>
    `
  },
  {
    id: '10',
    type: 'url',
    title: 'External Resource',
    content: 'https://example.com'
  }
];
