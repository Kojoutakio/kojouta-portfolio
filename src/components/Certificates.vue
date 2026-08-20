<script setup lang="ts">
import { certificates } from '../data/projects'
</script>
<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <h2 class="section-title reveal">Certificates</h2>
      <p class="section-subtitle reveal reveal-delay-1">Courses and certifications supporting 3D, web, voice, and interactive creation.</p>
      <div class="certs-grid">
        <article v-for="(cert, i) in certificates" :key="cert.id" class="cert-card reveal" :class="`reveal-delay-${(i % 4) + 1}`">
          <div class="cert-icon">✦</div>
          <div class="cert-body">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-desc">{{ cert.description }}</p>
            <span class="cert-year">{{ cert.year }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.certificates { background: linear-gradient(180deg, transparent, rgba(10, 10, 26, 0.4), transparent); }
.certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.cert-card { display: flex; gap: 1.2rem; padding: 1.5rem; background: var(--bg-card); border: 1px solid rgba(0, 240, 255, 0.12); border-radius: 10px; transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; }
.cert-card:hover { border-color: rgba(0, 240, 255, 0.4); transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3); }
.cert-icon { flex-shrink: 0; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: var(--accent-cyan); background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 8px; }
.cert-title { font-size: 1.05rem; margin-bottom: 0.3rem; color: var(--text-primary); }
.cert-issuer { font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 0.5rem; }
.cert-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.6rem; }
.cert-year { font-family: var(--font-display); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px; }
</style>
