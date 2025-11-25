<template>
  <div class="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Asymmetrische Public-Key-Kryptographie</h1>
      <p class="text-xl text-gray-700 mb-8">Wieso brauchen wir asymmetrische Kryptographie? 🤌🏻</p>

      <!-- Lernziele -->
      <AsymmetricLearningObjectives />

      <!-- 1. Das Problem verstehen: Schlüsselaustausch -->
      <KeyExchangeProblem />

      <!-- 2. Die Lösung: Public-Key-Konzept -->
      <PublicKeyConcept />

      <!-- 3. Praktische Übung: Schlüsselaustausch -->
      <KeyExchangeExercise />

      <!-- 4. Zweites Problem: Authentifizierung -->
      <AuthenticationProblem />

      <!-- 5. Die Lösung Teil 1: Digitale Signaturen -->
      <DigitalSignatureIntro />

      <!-- 6. Die Lösung Teil 2: PKI und Zertifikate -->
      <PKIExplanation />

      <!-- 7. Praktische Übung: Zertifikate untersuchen -->
      <CertificateExercise />

      <!-- 8. Anwendungsfälle in der Praxis (optional/erweiternd) -->
      <RealWorldApplications />

      <!-- 9. Zusammenfassung -->
      <AsymmetricSummary />
    </div>
    <Sources :sources="ASYMMETRIC_CRYPTO_SOURCES" />
  </div>
</template>

<script setup lang="ts">
import AsymmetricLearningObjectives from './asymmetric/AsymmetricLearningObjectives.vue';
import KeyExchangeProblem from './asymmetric/KeyExchangeProblem.vue';
import PublicKeyConcept from './asymmetric/PublicKeyConcept.vue';
import KeyExchangeExercise from './asymmetric/KeyExchangeExercise.vue';
import AuthenticationProblem from './asymmetric/AuthenticationProblem.vue';
import DigitalSignatureIntro from './asymmetric/DigitalSignatureIntro.vue';
import PKIExplanation from './asymmetric/PKIExplanation.vue';
import CertificateExercise from './asymmetric/CertificateExercise.vue';
import RealWorldApplications from './asymmetric/RealWorldApplications.vue';
import AsymmetricSummary from './asymmetric/AsymmetricSummary.vue';
import Sources from '@/components/ui/Sources.vue';
import { ASYMMETRIC_CRYPTO_SOURCES } from '@/constants/asymmetric';
</script>
