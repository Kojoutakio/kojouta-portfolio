<script setup lang="ts">
import { skills } from '../data/projects'
</script>
<template>
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title reveal">Skills & Expertise</h2>
      <p class="section-subtitle reveal reveal-delay-1">Tools across 3D, web, game development, and performance.</p>
      <div class="skill-pills reveal reveal-delay-2">
        <span v-for="s in skills.slice(0, 6)" :key="s.name" class="pill">{{ s.name }}</span>
      </div>
      <div class="skills-grid">
        <div v-for="(skill, i) in skills" :key="skill.name" class="skill-card reveal" :class="`reveal-delay-${(i % 4) + 1}`">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" :style="{ width: skill.level + '%' }"></div></div>
          <span class="skill-category">{{ skill.category }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.skill-pills { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2.5rem; }
.pill {
  font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 1px;
  padding: 0.5rem 1.2rem; border-radius: 999px;
  background: rgba(15, 15, 35, 0.9); border: 1px solid rgba(0, 240, 255, 0.25);
  color: var(--text-primary); transition: all 0.3s ease;
}
.pill:hover { border-color: var(--accent-cyan); box-shadow: 0 0 15px rgba(0, 240, 255, 0.25); color: var(--accent-cyan); }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.skill-card { background: var(--bg-card); border: 1px solid rgba(0, 240, 255, 0.1); border-radius: 8px; padding: 1.3rem 1.5rem; transition: border-color 0.3s ease, transform 0.3s ease; }
.skill-card:hover { border-color: rgba(0, 240, 255, 0.35); transform: translateY(-3px); }
.skill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.7rem; }
.skill-name { font-family: var(--font-display); font-size: 0.95rem; color: var(--text-primary); }
.skill-level { font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600; }
.skill-bar { height: 6px; background: rgba(255, 255, 255, 0.06); border-radius: 3px; overflow: hidden; margin-bottom: 0.6rem; }
.skill-fill { height: 100%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple)); border-radius: 3px; transition: width 1.2s ease; box-shadow: 0 0 10px rgba(0, 240, 255, 0.4); }
.skill-category { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
</style>
