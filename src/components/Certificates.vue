<script setup lang="ts">
import { ref } from 'vue'
import { certificates, type Certificate } from '../data/projects'

const selected = ref<Certificate | null>(null)

const openCert = (cert: Certificate) => {
  selected.value = cert
  document.body.style.overflow = 'hidden'
}

const closeCert = () => {
  selected.value = null
  document.body.style.overflow = ''
}

const openExternal = (cert: Certificate) => {
  if (cert.link) {
    window.open(cert.link, '_blank', 'noopener')
  } else if (cert.image) {
    window.open(cert.image, '_blank', 'noopener')
  }
}
</script>

<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <h2 class="section-title reveal">Certificates</h2>
      <p class="section-subtitle reveal reveal-delay-1">
        Courses and certifications supporting 3D, web, voice, and interactive creation.
        Click a card to view the certificate.
      </p>

      <div class="certs-grid">
        <article
          v-for="(cert, i) in certificates"
          :key="cert.id"
          class="cert-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
          @click="openCert(cert)"
        >
          <div class="cert-image-wrap">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="cert-image"
              loading="lazy"
            />
            <div class="cert-overlay">
              <span class="view-cert-btn">
                <span class="view-icon">↗</span>
                View Certificate
              </span>
            </div>
          </div>
          <div class="cert-info">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <span class="cert-year">{{ cert.year }}</span>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selected" class="modal-backdrop" @click.self="closeCert">
          <div class="modal-content">
            <button class="modal-close" @click="closeCert" aria-label="Close">✕</button>
            <div class="modal-image-wrap">
              <img :src="selected.image" :alt="selected.title" class="modal-image" />
            </div>
            <div class="modal-body">
              <h2 class="modal-title">{{ selected.title }}</h2>
              <p class="modal-issuer">{{ selected.issuer }} · {{ selected.year }}</p>
              <p class="modal-desc">{{ selected.description }}</p>
              <button class="btn btn-primary" @click="openExternal(selected)">
                Open Full Certificate
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.certificates {
  background: linear-gradient(180deg, transparent, rgba(10, 10, 26, 0.4), transparent);
}
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.75rem;
}
.cert-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.cert-card:hover {
  border-color: rgba(0, 240, 255, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 24px rgba(0, 240, 255, 0.12);
}
.cert-image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
}
.cert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.cert-card:hover .cert-image {
  transform: scale(1.05);
}
.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 16, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.cert-card:hover .cert-overlay {
  opacity: 1;
}
.view-cert-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: #fff;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(139, 92, 246, 0.35));
  border: 1px solid rgba(0, 240, 255, 0.5);
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  backdrop-filter: blur(6px);
}
.view-icon { font-size: 1.1rem; }
.cert-info { padding: 1.1rem 1.25rem 1.25rem; }
.cert-title { font-size: 1rem; margin-bottom: 0.25rem; color: var(--text-primary); line-height: 1.3; }
.cert-issuer { font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 0.4rem; }
.cert-year { font-family: var(--font-display); font-size: 0.7rem; color: var(--text-muted); letter-spacing: 1px; }
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(10px);
  z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; overflow-y: auto;
}
.modal-content {
  background: var(--bg-secondary); border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 14px;
  max-width: 720px; width: 100%; max-height: 92vh; overflow-y: auto; position: relative;
  box-shadow: 0 0 60px rgba(0, 240, 255, 0.15);
}
.modal-close {
  position: absolute; top: 1rem; right: 1rem; width: 36px; height: 36px;
  background: rgba(0, 0, 0, 0.55); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 50%;
  color: #fff; font-size: 1rem; cursor: pointer; z-index: 10; transition: all 0.2s ease;
}
.modal-close:hover { background: var(--accent-magenta); border-color: var(--accent-magenta); }
.modal-image-wrap {
  width: 100%; max-height: 55vh; overflow: hidden; background: #000; border-radius: 14px 14px 0 0;
}
.modal-image {
  width: 100%; height: auto; max-height: 55vh; object-fit: contain; display: block; margin: 0 auto;
}
.modal-body { padding: 1.5rem 2rem 2rem; }
.modal-title { font-size: 1.45rem; margin-bottom: 0.4rem; color: var(--text-primary); }
.modal-issuer { font-size: 0.9rem; color: var(--accent-cyan); margin-bottom: 1rem; }
.modal-desc { color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem; }
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal-content, .modal-leave-active .modal-content { transition: transform 0.3s ease; }
.modal-enter-from .modal-content, .modal-leave-to .modal-content { transform: scale(0.95) translateY(16px); }
@media (max-width: 600px) { .certs-grid { grid-template-columns: 1fr; } }
</style>
