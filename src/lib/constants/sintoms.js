export const sickness = {
	pulmonar: {
		alert_image: '/Images/pulmonar-sickness.png',
		sickness: [
			{ value: 'Neumonitis', label: 'Neumonitis' },
			{
				value: 'Enfermedad pulmonar intersticial',
				label: 'Enfermedad pulmonar intersticial',
			},
		],
		Neumonitis: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/>Asintomático o hallazgos radiológicos en TAC (opacidades en vidrio deslustrado, consolidación periférica, micronodularidad tipo árbol en brote).<br/><ul><li>Puede haber disnea leve.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>TAC de tórax (preferiblemente con contraste si se sospecha embolia pulmonar), oximetría de pulso, historia clínica y examen físico.</li><br/><li>Considerar pruebas de función pulmonar (PFP) si TAC negativa.</li><br/><li>Excluir neumonía infecciosa, progresión tumoral, embolia pulmonar, eventos cardíacos y carcinomatosis pleural mediante lavado broncoalveolar si hay dudas.</li>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Disnea, tos persistente, dolor torácico, fiebre).</li><br/><li>Compromiso pulmonar >1 lóbulo o 25 % -50 % del parénquima.</li><br/><li>Limitación en AVD.</li></ul><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>TAC de alta resolución, pruebas infecciosas (hisopado nasal, cultivos de esputo, sangre y orina), broncoscopia con lavado broncoalveolar ± biopsia transbronquial.</li><br/><li>Considerar pruebas de función pulmonar.</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas Grado 3::</b> </span><ul><li>Síntomas graves; compromiso pulmonar extenso (>50% del parénquima, todos los lóbulos).</li><br/><li>Limitación de AVD, oxígeno indicado.</li></ul><span style='color: #be2bbb'><b>Síntomas Grado 4:</b></span><ul><li>Compromiso respiratorio potencialmente mortal; requiere intervención urgente (intubación o traqueotomía).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>TAC, broncoscopia con BAL ± biopsia transbronquial, pruebas infecciosas completas.</li><br/><li>Hospitalización necesaria.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Continuar ICI con seguimiento estrecho o suspender temporalmente según evolución.</li><br/><li>Reevaluar en 1 semana con historia clínica, examen físico y pulsioximetría.</li><br/><li>Imágenes de tórax (radiografía o TAC) si diagnóstico incierto o para evaluar evolución.</li><br/><li>Repetir TAC en 3-4 semanas o antes si aparecen síntomas.</li><br/><li>Si no hay mejoría, manejar como grado 2.</li></ul>'
				],
                'step-2': [
					'<ul><li>Suspender ICI hasta mejoría a grado ≤1.</li>Prednisona 1-2 mg/kg/día VO, con reducción gradual en 4-6 semanas.</li><br><br><li>Considerar antibióticos empíricos si infección no descartada.</li><br/><li>Monitoreo semanal (historia clínica, examen físico, pulsioximetría, imágenes según necesidad).</li><br/><li>Si no hay mejoría en 48-72 h, tratar como grado 3.</li><br/><li>Consultar neumología e infectología.</li></ul>'
				],
                'step-≥3': [
					'<ul><li>Suspender ICI permanentemente.</li><br/><li>Metilprednisolona IV 1-2 mg/kg/día.</li><br/><li>Reducir progresivamente corticosteroides en ≥6 semanas.</li><br/><li>Si no hay mejoría en 48 h, añadir inmunosupresor: infliximab (5 mg/kg, repetir  en 14 días si necesario), micofenolato mofetil (1–1,5 g cada 12 h), IVIG (2 g/kg en dosis divididas), ciclofosfamida (600 mg/m²), tocilizumab (4 mg/kg IV).</li><br/><li>Consultar neumología e infectología. / Para grado 4:</li><br/><li>Considerar todo lo anterior, con hospitalización en UCI.</li></ul>',
                    '<ul><li>Considerar inmunosupresores adicionales si refractario.</li></ul><ul><li>Soporte ventilatorio avanzado.</li></ul> '
				],
			},
		},
		'Enfermedad pulmonar intersticial': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/>Asintomático, limitado a un lóbulo pulmonar o <25 % del parénquima pulmonar.<br/><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>TAC torácico con contraste (considerar repetir el TAC torácico en caso de deterioro clínico).</li><br/><li>Pulsioximetría.</li><br/><li>Análisis de sangre (hemograma, urea, electrolitos, función hepática, función tiroidea, calcio, velocidad de sedimentación globular, proteína C reativa).</li><br/><li>Considerar muestra de esputo y cribado de infecciones víricas, oportunistas o bacterianas específicas (micoplasma, legionela), dependiendo del contexto clínico.</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Presencia, aparición o empeoramiento de síntomas como disnea, dificultad respiratoria, tos, dolor torácico, aumento de las necesidades de oxígeno.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><b>Seguimiento ambulatorio:</b><br/><ul><li>Monitorizar síntomas diariamente.</li><br/><li>TAC torácico con contraste.<br/>Considerar trabajo de infección: cultivo de esputo, sangre y orina.</li><br/><li>Broncoscopia con LBA para descartar infección e infiltración tumoral como se menciona arriba.</li></ul>",
                    "<ul><li>Indicaciones basales como las expuestas anteriormente, más: repetir radiografía de tórax semanalmente, análisis de sangre basales y pruebas de función hepática incluyendo TLCO.</li></ul>"
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/>Sintomas graves de reciente aparición, hipoxia de reciente aparición o que empeora, potencialmente mortal, dificultad para respirar, síndrome de dificultad respiratoria aguda (SDRA).<br/><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><b>Hospitalizar al paciente:</b><ul><li>Pruebas basales como las anteriores.</li><br/><li>TAC de alta resolución y revisión respiratoria ± broncoscopia y LBA pendientes de aparición.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Considerar el retraso del tratamiento con observación clínica.</li><br/><li>Monitorizar los síntomas cada 2-3 días.</li><br/><li>Si los síntomas empeoran, tratar como grado 2 o 3-4.</li></ul>'
				],
                'step-2': [
					'<ul><li>Suspender la ICI.</li><br/><li>Iniciar antibióticos si sospecha de infección (fiebre, PCR, recuento de neutrófilos)</li><br/><br/><li>Si no hay evidencia de infección o no hay mejoría con antibióticos tras 48 h, añadir prednisolona oral 1 mg/kg/día</li><br/><li>Considerar profilaxis de pneumocystis, dependiendo del contexto clínico</li><br/><li>Si no hay mejoría 48h de prednisolona oral, manejar según grado 3</li></ul>'
				],
                'step-≥3': [
					'<ul><li>Interrumpir la terapia ICI</li><br/><li>(Metil) prednisolona i.v. 1-2 mg/kg/día</li><br/><li>Cubrir con antibióticos empíricos</li><br/><li>Discutir escalada y ventilación (IV, A)   En caso de ausencia de mejoría o deteriodo después de 48 horas, adicionar tocilizumab 8 mg/kg o infliximab 5 mg/kg ± inmunoglobulina IV. Considerar micofenolato de mofetilo o ciclofosfamida basado en reportes individuales, continuar con CSs IV; destetar cuando clínicamente esté indicado</li></ul>'
				],
			},
		},
	},
}
