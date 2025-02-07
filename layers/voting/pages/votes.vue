<template>
  <div class="min-h-screen bg-primary p-8">
    <PublicTicket :ticket="{
      title: 'Faut-il approuver les coupes budgétaires de 50 milliards d\'euros pour réduire le déficit public à 5,4 % du PIB en 2025 ?',
      description: 'Ce référendum propose de valider ou non les mesures d\'austérité incluses dans le budget 2025, qui visent à réduire le déficit public à 5,4 % du PIB. Ces mesures comprennent des coupes importantes dans les dépenses publiques et des hausses d\'impôts ciblées, tout en maintenant certains investissements stratégiques, notamment dans la transition climatique. Les citoyens seront directement concernés par ces décisions, car elles pourraient entraîner des réductions dans les services publics (santé, éducation, transports) et une augmentation de certaines taxes. Cependant, elles visent également à stabiliser l\'économie et à éviter une augmentation de la dette nationale qui pourrait peser sur les générations futures.',
      type: 'referendum',
      options: ['Oui', 'Non', 'Abstention'],
      implications: {
        pros: [
          'Réduction du déficit public à un niveau plus soutenable, ce qui pourrait renforcer la crédibilité financière de la France sur les marchés internationaux.',
          'Maintien d\'investissements stratégiques dans des secteurs clés comme la transition écologique et l\'énergie renouvelable.',
          'Possibilité de limiter l\'augmentation future de la dette publique et de réduire la charge pour les générations futures.'
        ],
        cons: [
          'Réduction potentielle de services publics essentiels tels que l\'éducation et la santé, affectant directement le quotidien des citoyens.',
          'Impact négatif sur la croissance économique en raison de la baisse des dépenses publiques et de l\'augmentation des impôts.',
          'Mécontentement social accru, avec des risques de mouvements de protestation contre les mesures d\'austérité.'
        ]
      },
      source_summary: 'Basé sur des rapports récents de Reuters, Euractiv et France24 concernant l\'adoption du budget 2025 par le Parlement français et les mesures visant à réduire le déficit public tout en équilibrant les priorités économiques.',
      ai_generated_date: '2025-02-07',
      status: 'proposed'
    }" />
  </div>
</template>
