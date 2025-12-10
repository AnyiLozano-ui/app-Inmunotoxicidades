export const sickness = {
	pulmonar: {
		alert_image: '/Images/pulmonar-sickness.png',
		height: 84,
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
					'<ul><li>Continuar ICI con seguimiento estrecho o suspender temporalmente según evolución.</li><br/><li>Reevaluar en 1 semana con historia clínica, examen físico y pulsioximetría.</li><br/><li>Imágenes de tórax (radiografía o TAC) si diagnóstico incierto o para evaluar evolución.</li><br/><li>Repetir TAC en 3-4 semanas o antes si aparecen síntomas.</li><br/><li>Si no hay mejoría, manejar como grado 2.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender ICI hasta mejoría a grado ≤1.</li>Prednisona 1-2 mg/kg/día VO, con reducción gradual en 4-6 semanas.</li><br><br><li>Considerar antibióticos empíricos si infección no descartada.</li><br/><li>Monitoreo semanal (historia clínica, examen físico, pulsioximetría, imágenes según necesidad).</li><br/><li>Si no hay mejoría en 48-72 h, tratar como grado 3.</li><br/><li>Consultar neumología e infectología.</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Suspender ICI permanentemente.</li><br/><li>Metilprednisolona IV 1-2 mg/kg/día.</li><br/><li>Reducir progresivamente corticosteroides en ≥6 semanas.</li><br/><li>Si no hay mejoría en 48 h, añadir inmunosupresor: infliximab (5 mg/kg, repetir  en 14 días si necesario), micofenolato mofetil (1–1,5 g cada 12 h), IVIG (2 g/kg en dosis divididas), ciclofosfamida (600 mg/m²), tocilizumab (4 mg/kg IV).</li><br/><li>Consultar neumología e infectología. / Para grado 4:</li><br/><li>Considerar todo lo anterior, con hospitalización en UCI.</li></ul>',
					'<ul><li>Considerar inmunosupresores adicionales si refractario.</li></ul><ul><li>Soporte ventilatorio avanzado.</li></ul> ',
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
					'<ul><li>Indicaciones basales como las expuestas anteriormente, más: repetir radiografía de tórax semanalmente, análisis de sangre basales y pruebas de función hepática incluyendo TLCO.</li></ul>',
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/>Sintomas graves de reciente aparición, hipoxia de reciente aparición o que empeora, potencialmente mortal, dificultad para respirar, síndrome de dificultad respiratoria aguda (SDRA).<br/><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><b>Hospitalizar al paciente:</b><ul><li>Pruebas basales como las anteriores.</li><br/><li>TAC de alta resolución y revisión respiratoria ± broncoscopia y LBA pendientes de aparición.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Considerar el retraso del tratamiento con observación clínica.</li><br/><li>Monitorizar los síntomas cada 2-3 días.</li><br/><li>Si los síntomas empeoran, tratar como grado 2 o 3-4.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender la ICI.</li><br/><li>Iniciar antibióticos si sospecha de infección (fiebre, PCR, recuento de neutrófilos)</li><br/><br/><li>Si no hay evidencia de infección o no hay mejoría con antibióticos tras 48 h, añadir prednisolona oral 1 mg/kg/día</li><br/><li>Considerar profilaxis de pneumocystis, dependiendo del contexto clínico</li><br/><li>Si no hay mejoría 48h de prednisolona oral, manejar según grado 3</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Interrumpir la terapia ICI</li><br/><li>(Metil) prednisolona i.v. 1-2 mg/kg/día</li><br/><li>Cubrir con antibióticos empíricos</li><br/><li>Discutir escalada y ventilación (IV, A)   En caso de ausencia de mejoría o deteriodo después de 48 horas, adicionar tocilizumab 8 mg/kg o infliximab 5 mg/kg ± inmunoglobulina IV. Considerar micofenolato de mofetilo o ciclofosfamida basado en reportes individuales, continuar con CSs IV; destetar cuando clínicamente esté indicado</li></ul>',
				],
			},
		},
	},

	gastro: {
		alert_image: '/Images/gastro-sickness.png',
		width: 185,
		height: 85,
		sickness: [
			{ value: 'Diarrea / Colitis', label: 'Diarrea / Colitis' },
			{
				value: 'Pancreatitis',
				label: 'Pancreatitis',
			},
			{
				value: 'Hepatitis',
				label: 'Hepatitis',
			},
		],
		'Diarrea / Colitis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Diarrea leve (<4 deposiciones/día respecto al basal), calambres, urgencia fecal, dolor abdominal, sangre/moco ocasional, fiebre leve.</li><br/><li>Aumento leve del volumen de ostomía.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>CBC, CMP, lactoferrina fecal; descartar infección (C. difficile, NAAT bacterias/virus, parásitos).</li><br/><li>Considerar calprotectina fecal si persiste.</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Diarrea moderada (4-6 deposiciones/día), síntomas de colitis, limitación de <a style='text-decoration:underline; color: #a69f9f'>AIVD</a>.</li></ul><ul><li>Aumento moderado del volumen de ostomía.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>CBC,</a> <a style='text-decoration:underline; color: #a69f9f'>CMP</a>, <a style='text-decoration:underline; color: #a69f9f'>TSH</a>; heces (cultivo, C. difficile, <a style='text-decoration:underline; color: #a69f9f'>CMV</a>, <a style='text-decoration:underline; color: #a69f9f'>O&P</a>); lactoferrina y calprotectina fecal.</li></ul><ul><li>Tamizaje <a style='text-decoration:underline; color: #a69f9f'>VIH</a>, hepatitis, <a style='text-decoration:underline; color: #a69f9f'>TB</a> si se planea biológicos.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> abdomen/pelvis si dolor o sangrado; endoscopia/colonoscopia con biopsia si  persiste >5 días.</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><b>Grado 3:</b><ul><li>Diarrea grave (≥7 deposiciones/día), incontinencia, hospitalización, limitación <a style='text-decoration:underline; color: #a69f9f'>AVD</a>.</li></ul><ul><li>Elevación marcada del volumen de ostomía.</li></ul><b>Grado 4:</b><ul><li>Consecuencias potencialmente mortales, intervención urgente.</li></ul><ul><li>Persistencia de síntomas graves pese a inmunosupresión.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><b>En ambos casos: </b><ul><li>En función de la disponibilidad institucional, considerar lactoferrina/calprotectina fecal.</li></ul>",
					'<ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">TC</a> abdominal/pélvica con contraste.</li></ul><ul><li>Consulta con gastroenterología recomendada.</li></ul><ul><li>Repetir estudios infecciosos.</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">TC</a> abdomen si sospecha perforación o megacolon tóxico; colonoscopia con biopsia para ulceraciones.</li></ul><ul><li>Tamizaje <a style="text-decoration:underline; color: #a69f9f">VIH</a>, hepatitis, <a style="text-decoration:underline; color: #a69f9f">TB</a> si se planea biológicos.</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">TC</a> abdomen/pelvis si dolor o sangrado; endoscopia/colonoscopia con biopsia si persiste >5 días.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia o suspender temporalmente según evolución.</li><br/><li>Hidratación oral, dieta baja en fibra y libre de lactosa (<a style="text-decoration:underline; color: #a69f9f">BRAT</a>).</li><br/><li>Loperamida o difenoxilato/atropina si no hay colitis confirmada.</li><br/><li>Seguimiento estrecho (cada 3 días).</li><br/><li>Consultar gastroenterología si síntomas prolongados.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender inmunoterapia hasta mejoría   grado ≤1.</li><br><li>Corticoides: prednisona 1 mg/kg/día (destete 4-6 semanas).</li><br/><li>Si refractario en 72 h o hallazgos endoscópicos graves: infliximab o vedolizumab.</li><br/><li>Seguimiento endoscópico y calprotectina para guiar duración del tratamiento.</li></ul>',
				],
				'step-≥3': [
					'<b>Grado 3: </b><ul><li>Suspender inmunoterapia.</li></ul><ul><li>Corticoides: prednisona o metilprednisolona IV 1-2 mg/kg/día.</li></ul><ul><li>Considerar infliximab o vedolizumab temprano si no hay respuesta en 3 días.</li></ul><ul><li>Hospitalización para hidratación y monitoreo electrolítico.</li></ul><b>Grado 4: </b><ul><li>Suspensión permanente de inmunoterapia.</li></ul><ul><li>Hospitalización obligatoria.</li></ul><ul><li>Metilprednisolona IV 1-2 mg/kg/día.</li></ul>',
					'<ul><li>Infliximab (semanas 0, 2, 6) o vedolizumab si falla respuesta a corticoides.</li></ul><ul><li>Considerar otros biológicos (ustekinumab, tofacitinib) o trasplante fecal en casos refractarios.</li></ul>',
				],
			},
		},
		Pancreatitis: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor epigástrico leve, náuseas y vómitos.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> abdominal con contraste; considerar <a style='text-decoration:underline; color: #a69f9f'>CPRM</a> si sospecha clínica sin evidencia en <a style='text-decoration:underline; color: #a69f9f'>TC</a>.</li><br/><li>Laboratorio: amilasa, lipasa, <a style='text-decoration:underline; color: #a69f9f'>CBC</a>, <a style='text-decoration:underline; color: #a69f9f'>CMP</a>, triglicéridos.</li><br/><li>Evaluar otras causas (alcohol, biliar)</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Elevación enzimática (amilasa/lipasa) asintomática o hallazgos radiológicos compatibles.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>TC abdominal con contraste; considerar <a style='text-decoration:underline; color: #a69f9f'>CPRM</a> si sospecha clínica sin evidencia en <a style='text-decoration:underline; color: #a69f9f'>TC</a>.</li><br/><li>Laboratorio: amilasa, lipasa, <a style='text-decoration:underline; color: #a69f9f'>CBC</a>, <a style='text-decoration:underline; color: #a69f9f'>CMP</a>, triglicéridos.</li><br/><li>Evaluar otras causas (alcohol, biliar)</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Dolor</li></ul><ul><li>Vómito</li></ul><ul><li>Hallazgos de pancreatitis (elevación de enzimas o hallazgos tomográficos) que ponen en riesgo la vida o condicionan inestabilidad hemodinámica o requieren una intervención urgente</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> abdominal con contraste; considerar <a style='text-decoration:underline; color: #a69f9f'>CPRM</a> si sospecha clínica sin evidencia en <a style='text-decoration:underline; color: #a69f9f'>TC</a>.</li></ul><ul><li>Laboratorio: amilasa, lipasa, <a style='text-decoration:underline; color: #a69f9f'>CBC</a>, <a style='text-decoration:underline; color: #a69f9f'>CMP</a>, triglicéridos.</li></ul><ul><li>Evaluar otras causas (alcohol, biliar).</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Considerar mantener inmunoterapia si asintomático.</li><br/><li>Hidratación IV y control del dolor si hay síntomas.</li><br/><li>Derivación a gastroenterología.</li></ul><ul><li>Monitoreo cercano ante posible progresión.</li></ul>',
				],
				'step-2': [
					'<ul><li>Considerar mantener inmunoterapia si asintomático.</li><br/><li>Hidratación IV y control del dolor si hay síntomas.</li><br/><li>Derivación a gastroenterología.</li><br/><li>Monitoreo cercano ante posible progresión.</li></ul>',
				],
				'step-≥3': [
					'<ul><li><b>Grado 3: </b></li>Suspender inmunoterapia temporalmente.<br/><br/><li>Hidratación IV y control del dolor.- Considerar prednisona/metilprednisolona 0,5-1 mg/kg/día si no hay mejoría tras soporte.</li><br/><li>Derivación a gastroenterología.</li><br/><b>Grado 4:</b><li>Suspender inmunoterapia permanentemente.</li></ul><ul><li>Hidratación IV intensiva y control del dolor.</li></ul><ul><li>Corticoides IV (metilprednisolona 1-2 mg/kg/día) si no hay mejoría con soporte.</li></ul>',
					'<ul><li>Continuar tratamiento hasta mejoría < G1, luego destete de esteroides en 4-6 semanas.</li></ul><ul><li>Derivación a gastroenterología y monitoreo estrecho.</li></ul>',
				],
			},
		},
		Hepatitis: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Asintomático (<a style='text-decoration:underline; color: #a69f9f'>AST</a> o <a style='text-decoration:underline; color: #a69f9f'>ALT</a><a style='text-decoration:underline; color: #a69f9f'>LSN</a> hasta 3x <a style='text-decoration:underline; color: #a69f9f'>LSN</a> y/o bilirrubina total < <a style='text-decoration:underline; color: #a69f9f'>LSN</a> hasta 1,5x <a style='text-decoration:underline; color: #a69f9f'>LSN</a>).</li></ul><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>Monitorizar <a style='text-decoration:underline; color: #a69f9f'>AST</a>, <a style='text-decoration:underline; color: #a69f9f'>ALT</a> y bilirrubina antes de cada infusión; considerar monitoreo semanal si hay elevaciones grado 1.</li><br/><li>Revisar medicamentos y descartar metástasis hepáticas.</li><br/><li>Considerar biopsia hepática si refractario a esteroides o diagnóstico incierto.</li><br/><li>Paneles adicionales si sospecha autoinmune: <a style='text-decoration:underline; color: #a69f9f'>ANA</a>, <a style='text-decoration:underline; color: #a69f9f'>ASMA</a>, <a style='text-decoration:underline; color: #a69f9f'>ANCA</a>; medir <a style='text-decoration:underline; color: #a69f9f'>GGT</a> si <a style='text-decoration:underline; color: #a69f9f'>ALP</a> elevado; <a style='text-decoration:underline; color: #a69f9f'>CK</a> si elevación aislada de transaminasas.</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Asintomático (<a style='text-decoration:underline; color: #a69f9f'>AST</a> o <a style='text-decoration:underline; color: #a69f9f'>ALT</a> >3x - ≤5x <a style='text-decoration:underline; color: #a69f9f'>LSN</a> y/o bilirrubina >1,5x - ≤3x <a style='text-decoration:underline; color: #a69f9f'>LSN</a>).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>Igual que grado 1, más pruebas adicionales (hepatitis viral, hierro sérico, imágenes si sospecha progresión).</li><br/><li>Monitoreo frecuente (cada 3 días).</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li> <a style='text-decoration:underline; color: #a69f9f'>AST</a> o <a style='text-decoration:underline; color: #a69f9f'>ALT</a> 5-20x <a style='text-decoration:underline; color: #a69f9f'>LSN</a> y/o bilirrubina 3-10x <a style='text-decoration:underline; color: #a69f9f'>LSN</a>.</li></ul><ul><li>Disfunción hepática sintomática, fibrosis confirmada, cirrosis compensada, reactivación de hepatitis crónica.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Igual que grado 1, más pruebas adicionales (hepatitis viral, hierro sérico, imágenes si sospecha progresión).</li></ul><ul><li>Monitoreo frecuente (cada 3 días).</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia con monitoreo cercano.</li><br/><li>Monitoreo de laboratorio 1-2 veces por semana.</li><br/><li>Manejo sintomático con medidas de soporte.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender inmunoterapia temporalmente. Suspender fármacos hepatotóxicos innecesarios.</li><br/><li>Iniciar prednisona 0,5-1 mg/kg/día si no hay mejoría tras 3-5 días.</li><br/><li>Considerar micofenolato de mofetilo si no hay respuesta a esteroides.</li><br/><li>Consulta por hepatología en grado ≥2.</li><br/><li>Reiniciar <a style="text-decoration:underline; color: #a69f9f">ICI</a> si se recupera a grado ≤1 y prednisona ≤10 mg/día.</li></ul>',
				],
				'step-≥3': [
					'<ul><b>Grado 3: </b></ul><ul><li>Suspender inmunoterapia definitivamente si el paciente presenta síntomas.</li><br/><li>Iniciar metilprednisolona 1-2 mg/kg/día.</li><br/><li>Si el paciente es refractario, considerar micofenolato, azatioprina.</li><br/><li>Monitoreo diario o cada 2 día s; hospitalización si <a style="text-decoration:underline; color: #a69f9f">AST</a>/<a style="text-decoration:underline; color: #a69f9f">ALT</a> >8x <a style="text-decoration:underline; color: #a69f9f">ULN</a> y/o bilirrubina >3x <a style="text-decoration:underline; color: #a69f9f">ULN</a>.</li></ul><ul><li>Disminución progresiva de esteroides tras 4-6 semanas cuando se logre grado ≤1.</li></ul>',
					'<ul><b>Grado 4: </b><br/>Seguir recomendaciones de grado 3, más lo siguiente:</ul><ul><li>Suspender inmunoterapia permanentemente.</li><br/><li>Administrar metilprednisolona 2 mg/kg/díao equivalente.</li></ul><ul><li>Continuar monitoreo intensivo y considerar transferencia a centro especializado.</li></ul><ul><li>Nota: no usar infliximab, debido al riesgo de hepatotoxicidad.</li></ul>',
				],
			},
		},
	},

	renal: {
		alert_image: '/Images/renal-sickness.png',
		width: 147,
		height: 85,
		sickness: [
			{
				value: 'Insuficiencia renal aguda (AKI) / nefritis / aumento de creatinina sérica (sCr)',
				label: 'Insuficiencia renal aguda (AKI) / nefritis / aumento de creatinina sérica (sCr)',
			},
		],
		'Insuficiencia renal aguda (AKI) / nefritis / aumento de creatinina sérica (sCr)':
			{
				test: {
					'step-1': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Incremento de creatinina >0,3 mg/dl en 48 h o 1,5–1,9 veces basal (KDIGO 1).</li><br/><li>Según CTCAE: sCr >LSN - 1,5x LSN.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Análisis de orina (tira reactiva, proteinuria, UPCR).</li><br/><li>Cuantificación de proteinuria (24 h o UPCR si proteinuria presente).</li></ul><ul><li>Creatinina en orina, cultivo urinario si síntomas de ITU.</li></ul><ul><li>Ecografía renal ± Doppler si sospecha obstrucción/trombosis.</li></ul>",
						'<ul><li>Microscopía si hematuria(descartar glomerulonefritis).</li></ul><ul><li>Revisión de hidratación y medicamentos (incluidos nefrotóxicos).</li></ul><ul><li>Informar al paciente sobre oliguria.</li></ul><ul><li>Considerar biopsia renal si diagnóstico incierto.</li></ul><ul><li>Monitoreo de creatinina antes de cada dosis de ICI.</li></ul>',
					],
					'step-2': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Creatinina 2–3 veces basal (KDIGO 2).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Análisis de orina (tira reactiva, proteinuria, UPCR).</li></ul><ul><li>Cuantificación de proteinuria (24 h o UPCR si proteinuria presente).</li></ul><ul><li>Creatinina en orina, cultivo urinario si síntomas de ITU.</li></ul><ul><li>Ecografía renal ± Doppler si sospecha obstrucción/trombosis.</li></ul><ul><li>Microscopía si hematuria (descartar glomerulonefritis).</li></ul>",
						'<ul><li>Revisión  de hidratación y medicamentos (incluidos nefrotóxicos).</li></ul><ul><li>Informar al paciente sobre oliguria.</li></ul><ul><li>Considerar biopsia renal si diagnóstico incierto.</li></ul><ul><li>Monitoreo de creatinina antes de cada dosis de ICI.</li></ul><ul><li>Reevaluación en 48–72 h.</li></ul><ul><li>Considerar biopsia renal si no mejora o proteinuria significativa.</li></ul>',
					],
					'step-≥3': [
						"<span style='color: #be2bbb'><b>Síntomas grado 3:</b></span><br/><ul><li>Elevación de creatinina basal ≥ 3,0 veces la creatinina basa; 4,0 mg/dl o necesidad de terapia de reemplazo renal, cuando está indicada dialisis.</li></ul><span style='color: #be2bbb'><b>Síntomas grado 4:</b></span><ul><li>Consecuencias potencialmente mortales; diálisis indicada; creatinina >6x LSN.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><br/><ul><li>Análisis de orina (tira reactiva, proteinuria, UPCR).</li></ul><ul><li>Cuantificación de proteinuria (24 h o UPCR si proteinuria presente).</li></ul><ul><li>Creatinina en orina, cultivo urinario si síntomas de ITU.</li></ul>",
						'<ul><li>Ecografía renal ± Doppler si sospecha obstrucción/trombosis.</li></ul><ul><li>Microscopía si hematuria (descartar glomerulonefritis).</li></ul><ul><li>Revisión de hidratación y medicamentos (incluidos nefrotóxicos).</li></ul><ul><li>Informar al paciente sobre oliguria.</li></ul><ul><li>Considerar biopsia renal si diagnóstico incierto.</li></ul><ul><li>Monitoreo de creatinina antes de cada dosis de ICI.</li></ul><ul><li>Reevaluación en 48–72 h.</li></ul>',
						'<ul><li>Considerar biopsia renal si no mejora o proteinuria significativa.</li></ul><ul><li>Discusión temprana con nefrología.</li></ul><ul><li>Considerar biopsia renal.</li></ul>',
					],
				},
				manage: {
					'step-1': [
						'<ul><li>Continuar inmunoterapia si estable.</li><br/><li>Suspender fármacos nefrotóxicos.</li><br/><li>Repetir creatinina semanalmente.</li><br/><li>Si empeora: descartar otras causas, interrumpir ICI según gravedad.</li><br/><li>Iniciar prednisona/metilprednisolona 1 mg/kg si sospecha EARI.</li></ul>',
					],
					'step-2': [
						'<ul><li>Suspender inmunoterapia temporalmente. Hidratación y monitoreo de creatinina y K+ cada 48 h.</li><br><li>Si EARI confirmado: iniciar corticosteroides (prednisona 0,5–1 mg/kg).</li><br/><li>Si no mejora en 1 semana: aumentar a 1–2 mg/kg y suspender ICI permanentemente.</li><br/><li>Reducir corticosteroides gradualmente ≥4 semanas.</li></ul><ul><li>Reiniciar ICI solo si prednisona ≤10 mg/día y función renal recuperada.</li></ul>',
					],
					'step-≥3': [
						'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Consulta con nefrología</li></ul><ul><li>Hospitalización para monitoreo y balance de líquidos.</li></ul><ul><li>Repetir creatinina cada 24 h.</li></ul><ul><li>Metilprednisolona IV 1 mg/kg o pulsos de 250–500 mg por 3 días.</li></ul><ul><li>Biopsia renal si no hay mejoría en 5–7 días y/o nueva proteinuria.</li></ul>',
						'<ul><li>Según los resultados de la biopsia renal, considerar uno de los siguientes si la lesión renal persiste en AKI ≥2 después de 4–6 semanas con corticosteroides o si la creatinina aumenta al reducir los esteroides (o tras su suspensión) (orden alfabético): azatioprina, infliximab, micofenolato mofetil o rituximab.</li></ul>',
					],
				},
			},
	},

	endocrino: {
		alert_image: '/Images/endocrino-sickness.png',
		width: 185,
		height: 84,
		sickness: [
			{ value: 'Trastornos tiroideos', label: 'Trastornos tiroideos ' },
			{
				value: 'Hipofisitis',
				label: 'Hipofisitis',
			},
			{
				value: 'Hiperglucemia / Diabetes mellitus',
				label: 'Hiperglucemia / Diabetes mellitus',
			},
			{
				value: 'Insuficiencia suprarrenal',
				label: 'Insuficiencia suprarrenal',
			},
		],
		'Trastornos tiroideos': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas de hipotiroidismo: </b></span><ul><li>Generalmente asintomático; puede haber fatiga leve, letargo, sensación de frío.</li></ul><span style='color: #be2bbb'><b>Síntomas de hipertiroidismo: </b></span><ul><li>Generalmente asintomático.</li><br/><li>Aumento leve del volumen de ostomía.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipotiroidismo: </b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>TSH</a> >4,5 y <10 mlU/L; <a style='text-decoration:underline; color: #a69f9f'>T4L</a> normal. Monitoreo rutinario cada 4–6 semanas. Panel endocrino basal: <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, <a style='text-decoration:underline; color: #a69f9f'>FT4</a>, T3.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipertiroidismo: </b></span><ul><li>TSH bajo, FT4 normal. Monitoreo rutinario en pacientes asintomáticos: TSH (opción de T4L) cada 4-6 semanas. Evaluación para hipertiroidismo y enfermedad de Graves.</li></ul><ul>Nota: El hipertiroidismo puede preceder al hipotiroidismo.</ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas de hipotiroidismo: </b></span><ul><li>Síntomas moderados: fatiga marcada, bradicardia, estreñimiento, intolerancia al frío. <a style='text-decoration:underline; color: #a69f9f'>TSH</a> >10 mIU/L, <a style='text-decoration:underline; color: #a69f9f'>T4L</a> bajo.</li></ul><span style='color: #be2bbb'><b>Síntomas de hipertiroidismo:</b></span><ul><li>Taquicardia, pérdida de peso, ansiedad (si presente).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipotiroidismo: </b></span><ul><li>Repetir <a style='text-decoration:underline; color: #a69f9f'>TSH</a>/T4L cada 6–8 semanas durante ajuste. Considerar anticuerpos anti-<a style='text-decoration:underline; color: #a69f9f'>TPO</a> y anti-<a style='text-decoration:underline; color: #a69f9f'>TSH</a>.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipertiroidismo: </b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>TSH</a> bajo, <a style='text-decoration:underline; color: #a69f9f'>T4L</a> alto. Monitoreo rutinario en pacientes asintomáticos: <a style='text-decoration:underline; color: #a69f9f'>TSH</a> (opción de <a style='text-decoration:underline; color: #a69f9f'>T4L</a>) cada 4-6 semanas. Evaluación para hipertiroidismo y enfermedad de Graves.</li></ul><ul>Nota: El hipertiroidismo puede preceder al hipotiroidismo.</ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas de hipotiroidismo: </b></span><br/><ul><li>Síntomas graves: mixedema (bradicardia, hipotermia, alteración del estado mental), riesgo vital, ncapacidad para realizar actividades de la vida diaria (<a style='text-decoration:underline; color: #a69f9f'>AVD</a>).</li></ul><span style='color: #be2bbb'><b>Síntomas de hipertiroidismo: </b></span><ul><li>Crisis tiroidea o hipertiroidismo grave (si presente).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipotiroidismo: </b></span><br/><ul><li>Igual que grado 2, más evaluación urgente. Considerar cortisol antes de iniciar levotiroxina.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios de hipertiroidismo: </b></span><ul><li>Igual que grado 2, más evaluación urgente.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<b style="color: #be2bbb">Manejo de hipotiroidismo:</b><ul><li>Continuar inmunoterapia. Monitoreo regular  de pruebas tiroideas. Considerar levotiroxina si <a style="text-decoration:underline; color: #a69f9f">TSH</a> >10 persiste. Dosis: 1,5–1,6 μg/kg/día en jóvenes; 25–50 μg/día en >65 años o cardiopatía.</li></ul><span style="color: #be2bbb"><b>Evaluación y estudios:</b></span><ul><li>Repetir pruebas rutinariamente.</li></ul><ul><li>Si aparecen síntomas de hipertiroidismo o T4L elevado, tratar con betabloqueadores.</li></ul><ul><li>Pacientes con asma o EPOC: usar betabloqueadores cardioselectivos (atenolol o metoprolol).</li></ul>',
				],
				'step-2': [
					'<b style="color: #be2bbb">Manejo de hipotiroidismo: </b><ul><li>Iniciar levotiroxina (0,5–1,5 μg/kg/día; dosis baja en ancianos o cardiopatía). Consulta endocrinológica. Ajuste según TSH/T4L.  Continuar inmunoterapia una vez descartada insuficiencia suprarrenal y establecida la terapia endocrina de reemplazo</li></ul><span style="color: #be2bbb"><b>Manejo de hipertiroidismo:</b></span><ul><li>Betabloqueadores (propranolol o atenolol). Si presenta enfermedad de Graves: añadir carbimazol. Suspender inmunoterapia si el paciente está clínicamente inestable con hipertiroidismo sintomático.</li></ul>',
				],
				'step-≥3': [
					'<b style="color: #be2bbb">Manejo de hipotiroidismo: </b><ul><li>Hospitalización. Levotiroxina IV. Hidrocortisona antes de hormona tiroidea si insuficiencia suprarrenal no descartada. Manejo intensivo en UCI si coma mixedematoso. Interrumpir inmunoterapia.</li></ul><b style="color: #be2bbb">Manejo de hipertiroidismo:</b><ul><li>Manejo hospitalario. Corticoides solo si tiroiditis dolorosa o síntomas graves. Interrumpir inmunoterapia.</li></ul>',
				],
			},
		},
		Hipofisitis: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas: </b></span><ul><li>Fatiga leve, anorexia, o asintomático.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Cortisol y ACTH (preferiblemente 9 am), <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, <a style='text-decoration:underline; color: #a69f9f'>FT4</a>, <a style='text-decoration:underline; color: #a69f9f'>LH</a>, <a style='text-decoration:underline; color: #a69f9f'>FSH</a>, estradiol/testosterona, <a style='text-decoration:underline; color: #a69f9f'>IGF-1</a>, prolactina. </li><br/><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> hipofisaria protocolo pituitario (descartar metástasis). </li></ul><ul><li>Monitorización cada 1–2 semanas si <a style='text-decoration:underline; color: #a69f9f'>TFTs</a> normales.</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas: </b></span><ul><li>Cefalea moderada sin alteración visual.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Cortisol y <a style='text-decoration:underline; color: #a69f9f'>ACTH</a> (preferiblemente 9 am), <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, <a style='text-decoration:underline; color: #a69f9f'>FT4</a>, <a style='text-decoration:underline; color: #a69f9f'>LH</a>, <a style='text-decoration:underline; color: #a69f9f'>FSH</a>, estradiol/testosterona, <a style='text-decoration:underline; color: #a69f9f'>IGF-1</a>, prolactina.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> hipofisaria protocolo pituitario (descartar metástasis). </li></ul><ul><li>Monitorización cada 1–2 semanas si <a style='text-decoration:underline; color: #a69f9f'>TFTs</a> normales.</li></ul><ul><li>Campimetría visual.</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas: </b></span><br/><ul><li>Cefalea grave, alteración visual, hipoadrenalismo grave (hipotensión, alteraciones electrolíticas).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios</b></span><ul><li>Cortisol y <a style='text-decoration:underline; color: #a69f9f'>ACTH</a> (preferiblemente 9 am), <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, <a style='text-decoration:underline; color: #a69f9f'>FT4</a>, <a style='text-decoration:underline; color: #a69f9f'>LH</a>, <a style='text-decoration:underline; color: #a69f9f'>FSH</a>, estradiol/testosterona, <a style='text-decoration:underline; color: #a69f9f'>IGF-1</a>, prolactina. </li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> hipofisaria protocolo pituitario (descartar metástasis).  Monitorización cada 1–2 semanas si <a style='text-decoration:underline; color: #a69f9f'>TFTs</a> normales.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> urgente.</li></ul><ul><li>Campimetría formal.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Considerar suspensión temporal de la inmunoterapia hasta estabilización con reemplazo hormonal.</li></ul><ul><li>Iniciar hidrocortisona 20/10 mg si cortisol bajo. </li></ul><ul><li>Siempre reemplazar cortisol antes de iniciar <a style="text-decoration:underline; color: #a69f9f">T4</a> para evitar crisis suprarrenal. </li></ul><ul><li>Educación sobre dosis de estrés, inyecciones de emergencia y uso de alerta médica.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender inmunoterapia temporalmente.</li></ul><ul><li>Prednisolona oral 0,5–1 mg/kg/día tras toma de muestras. </li></ul><ul><li>Si no mejora en 48 h, tratar como grado 3.</li></ul><ul><li>Reducir corticoides en 1–2 semanas hasta dosis fisiológica (5 mg/día). </li></ul><ul><li>Reposición hormonal como en grado 1.</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Hospitalización inmediata.</li></ul><ul><li>Reposición de líquidos con solución salina (mínimo 2L) o agua libre monitoreada si diabetes insípida. </li></ul><ul><li>Si los síntomas son graves y se teme un efecto masivo, puede considerarse la administración de dosis altas de esteroides.</li></ul><ul><li>Esteroides IV en dosis de estrés: Hidrocortisona 50–100 mg cada 6–8 h. </li></ul><ul><li>Metilprednisolona IV 1 mg/kg/día tras toma de muestras.</li></ul>',
					'<ul><li>Reducir corticoides en 2–4 semanas hasta dosis fisiológica. </li></ul><ul><li>Consulta por endocrinología urgente.</li></ul><ul><li>No suspender corticoides abruptamente. </li></ul><ul><li>Educación para pacientes en terapia con hidrocortisona:</li></ul><ul><b style="color: #be2bbb">1.</b> Uso de dispositivo de alerta médica.</ul><ul><b style="color: #be2bbb">2.</b> Dosis dev estrés de esteroides en hospitalización o enfermedad grave.</ul><ul><b style="color: #be2bbb">3.</b>Uso de emergencia de dexametasona o hidrocortisona parenteral.</ul>',
				],
			},
		},
		'Hiperglucemia / Diabetes mellitus': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas de hiperglucemia:</b></span><ul><li>Péptido C bajo (consistente con <a style='text-decoration:underline; color: #a69f9f'>ICI-DMT1</a>) y <a style='text-decoration:underline; color: #a69f9f'>DKA</a> presente</li></ul><span style='color: #be2bbb'><b>Síntomas de diabetes mellitus:</b></span><ul><li>Asintomático o síntomas leves</li><br/><li><a style='text-decoration:underline; color: #a69f9f'>DMT2</a> con glucosa en ayuno >160 mg/dl sobre el <a style='text-decoration:underline; color: #a69f9f'>LSN</a> (8,9 mmol/L).</li></ul><ul><li>Sin evidencia de <a style='text-decoration:underline; color: #a69f9f'>CIADM</a> (sin cetoacidosis ni autoinmunidad pancreática en laboratorio).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Criterios diagnósticos en hiperglucemia:</li></ul><ul><b style='color: #be2bbb'>1.</b>Glucosa en ayunas >200 mg/dL (reciente diagnóstico). </ul><ul><b style='color: #be2bbb'>2.</b>Glucosa al azar >250 mg/dL.</ul><ul><b style='color: #be2bbb'>3.</b>Antecedentes de <a style='text-decoration:underline; color: #a69f9f'>DM</a> tipo 2 con glucosa en ayunas/al azar >250 mg/dL.</ul>",
					'<b style="color: #be2bbb">Evaluación diagnóstica en hiperglucemia:</b><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">DM</a> tipo 1 inducida por <a style="text-decoration:underline; color: #a69f9f">ICI</a> (<a style="text-decoration:underline; color: #a69f9f">ICI-DMT1</a>) de reciente diagnóstico.</li></ul><ul><li>Medir péptido C con glucosa sérica a repetición.</li></ul><ul><li>Evaluar cetoacidosis diabética (<a style="text-decoration:underline; color: #a69f9f">DKA</a>) según protocolos institucionales:</li></ul><ul><b style="color: #be2bbb">1.</b><a style="text-decoration:underline; color: #a69f9f">pH</a> sanguíneo</ul><ul><b style="color: #be2bbb">2.</b>Perfil metabólico básico.</ul><ul><b style="color: #be2bbb">3.</b>Cetonas en orina o suero  (beta-hidroxibutirato).</ul><ul><li>Considerar medición de autoanticuerpos: anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-células de los islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>.</li></ul>',
					'<b style="color: #be2bbb">Evaluación y estudios en diabetes mellitus:</b><ul><li>Monitoreo de síntomas (poliuria, polidipsia, fatiga).</li></ul><ul><li>Glucosa inicial y en cada ciclo por ≥6 meses.</li></ul><ul><li>Hemoglobina <a style="text-decoration:underline; color: #a69f9f">A1c</a> para diagnóstico y control.</li></ul><ul><li>Péptido C para reserva de insulina.</li></ul><ul><li>Autoanticuerpos (anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>).</li></ul><ul><li>Cetonas en orina/suero, brecha aniónica.</li></ul>',
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas de hiperglucemia:</b></span><ul><li>Péptido C bajo (consistente con <a style='text-decoration:underline; color: #a69f9f'>ICI-DMT1</a>) y <a style='text-decoration:underline; color: #a69f9f'>DKA</a> ausente </li></ul><span style='color: #be2bbb'><b>Síntomas de diabetes mellitus:</b></span><ul><li>Síntomas moderados, paciente puede realizar actividades diarias</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>DMT2</a> con glucosa en ayuno >160-250 mg/dl (8,9 - 13,9 mmol/L).</li></ul><ul><li>Sin cetoacidosis ni alteraciones metabólicas, pero con evidencia de <a style='text-decoration:underline; color: #a69f9f'>CIADM</a> a cualquier nivel de glucosa.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><b>Criterios diagnósticos en hiperglucemia:</b></li></ul><ul><b style='color: #be2bbb'>1.</b>Glucosa en ayunas >200 mg/dL (reciente diagnóstico). </ul><ul><b style='color: #be2bbb'>2.</b>Glucosa al azar >250 mg/dL.</ul>",
					'<ul><b style="color: #be2bbb">3.</b>Antecedentes de <a style="text-decoration:underline; color: #a69f9f">DM</a> tipo 2 con glucosa en ayunas/ al azar >250 mg/dL.</ul><b style="color: #be2bbb">Evaluación diagnóstica en hiperglucemia:</b><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">DM</a> tipo 1 inducida por <a style="text-decoration:underline; color: #a69f9f">ICI</a> (<a style="text-decoration:underline; color: #a69f9f">ICI-DMT1</a>) de reciente diagnóstico.</li></ul><ul><li>Medir péptido C con glucosa sérica a repetición.</li></ul><ul><li>Evaluar cetoacidosis diabética (<a style="text-decoration:underline; color: #a69f9f">DKA</a>) según protocolos institucionales:</li></ul><ul><b style="color: #be2bbb">1.</b> pH sanguíneo.</ul><ul><b style="color: #be2bbb">2.</b>Perfil metabólico básico.</ul><ul><b style="color: #be2bbb">3.</b>Cetonas en orina o suero  (beta-hidroxibutirato).</ul><ul><li>Considerar medición de autoanticuerpos: anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-células de los islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>.</li></ul>',
					'<b style="color: #be2bbb">Evaluación y estudios en diabetes mellitus:</b><ul><li>Monitoreo de síntomas (poliuria, polidipsia, fatiga).</li></ul><ul><li>Glucosa inicial y en cada ciclo por ≥6 meses.</li></ul><ul><li>Hemoglobina A1c para diagnóstico y control.</li></ul><ul><li>Péptido C para reserva de insulina.</li></ul><ul><li>Autoanticuerpos (anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>).</li></ul><ul><li>Cetonas en orina/suero, brecha aniónica.</li></ul>',
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas de hiperglucemia:</b></span><br/><ul><li>Péptido C adecuado para glucosa sérica</li></ul><span style='color: #be2bbb'><b>Síntomas de diabetes mellitus:</b></span><ul><li>Síntomas graves, riesgo de complicaciones médicas importantes o potencialmente mortales, incapacidad para realizar actividades de la vida diaria (<a style='text-decoration:underline; color: #a69f9f'>AVD</a>).</li></ul><ul><li><b style='color: #be2bbb'>Grado 3: </b> Glucosa en ayuno >250-500 mg/dl (13,9 - 27,8 mmol/L).</li></ul><ul><li><b style='color: #be2bbb'>Grado 4: </b>Glucosa en ayuno >500 mg/dl (>27,8 mmol/L).</li></ul><ul>Cetoacidosis o alteraciones metabólicas graves.</ul>",
					'<span style="color: #be2bbb"><b>Síntomas de hiperglucemia:</b></span><ul>Criterios diagnósticos en hiperglucemia:</ul><ul><b style="color: #be2bbb">1.</b>Glucosa en ayunas >200 mg/dL (reciente diagnóstico). </ul><ul><b style="color: #be2bbb">2.</b>Glucosa al azar >250 mg/dL.</ul><ul><b style="color: #be2bbb">3.</b>Antecedentes de <a style="text-decoration:underline; color: #a69f9f">DM</a> tipo 2 con glucosa en ayunas/ al azar >250 mg/dL.</ul><b style="color: #be2bbb">Evaluación diagnóstica en hiperglucemia:</b><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">DM</a> tipo 1 inducida por <a style="text-decoration:underline; color: #a69f9f">ICI</a> (<a style="text-decoration:underline; color: #a69f9f">ICI-DMT1</a>) de reciente diagnóstico.</li></ul><ul><li>Medir péptido C con glucosa sérica a repetición.</li></ul><ul><li>Evaluar cetoacidosis diabética (<a style="text-decoration:underline; color: #a69f9f">DKA</a>) según protocolos institucionales:</li></ul><ul><b style="color: #be2bbb">1.</b><a style="text-decoration:underline; color: #a69f9f">pH<a/> sanguíneo.</ul><ul><b style="color: #be2bbb">2.</b>Perfil metabólico básico.</ul>',
					'<ul><b style="color: #be2bbb">3.</b>Cetonas en orina o suero (beta-hidroxibutirato).</ul><ul><li>Considerar medición de autoanticuerpos: anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-células de los islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>.</li></ul><b style="color: #be2bbb">Evaluación y estudios en diabetes mellitus:</b><ul><li>Monitoreo de síntomas (poliuria, polidipsia, fatiga).</li></ul><ul><li>Glucosa inicial y en cada ciclo por ≥6 meses.</li></ul><ul><li>Hemoglobina <a style="text-decoration:underline; color: #a69f9f">A1c</a> para diagnóstico y control.</li></ul><ul><li>Péptido C para reserva de insulina.</li></ul><ul><li>Autoanticuerpos (anti-<a style="text-decoration:underline; color: #a69f9f">GAD</a>, anti-islotes, <a style="text-decoration:underline; color: #a69f9f">IA-2</a>, anti-insulina, <a style="text-decoration:underline; color: #a69f9f">ZnT8</a>).</li></ul><ul><li>Cetonas en orina/suero, brecha aniónica.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<b style="color: #be2bbb">Hiperglucemia: </b><ul><li>Consulta urgente con endocrinología.</li></ul><ul><li>Hospitalización para manejo intensivo.</li></ul><ul><li>Suspender inmunoterapia hasta resolución de <a style="text-decoration:underline; color: #a69f9f">DKA</a>.</li></ul><ul><li>Tratar <a style="text-decoration:underline; color: #a69f9f">DKA</a> según protocolos institucionales.</li></ul><ul><li>Iniciar insulina bajo supervisión del equipo de endocrinología y monitoreo estricto de glucosa.</li></ul><ul><li><a>Considerar uso temprano de <a style="text-decoration:underline; color: #a69f9f">CGM.</a></li></ul>',
					'<b style="color: #be2bbb">Diabetes mellitus:</b><ul><li>Continuar inmunoterapia con supervisión médica estrecha.</li></ul><ul><li>Pruebas periódicas.</li></ul><ul><li>Remisión a atención primaria.</li></ul><ul><li>Iniciar terapia oral en nuevos casos de <b style="text-decoration:underline; color: #a69f9f">DMT2</b>.</li></ul><ul><li>Consejería sobre manejo de diabetes, incluyendo:</li></ul><ul><b style="color: #be2bbb">1.</b> Cambios en dieta y estilo de vida.</ul><ul><b style="color: #be2bbb">2.</b> Monitorización de glucosa.</ul><ul><b style="color: #be2bbb">2.</b>Tratamiento con insulina.</ul>',
				],
				'step-2': [
					'<b style="color: #be2bbb">Hiperglucemia: : </b><ul><li>Consulta urgente con endocrinología.</li></ul><ul><li>Hospitalización para manejo intensivo.</li></ul><ul><li>Suspender inmunoterapia hasta resolución de <a style="text-decoration:underline; color: #a69f9f">DKA</a>.</li></ul><ul><li>Tratar <a style="text-decoration:underline; color: #a69f9f">DKA</a> según protocolos institucionales.</li></ul><ul><li>Iniciar insulina bajo supervisión del equipo de endocrinología y monitoreo estricto de glucosa.</li></ul><ul><li>Considerar uso temprano de <a style="text-decoration:underline; color: #a69f9f">CGM.</a>.</li></ul>',
					'<b style="color: #be2bbb">Diabetes mellitus:</b><ul><li>Suspender inmunoterapia temporalmente hasta control glucémico.</li></ul><ul><li>Consulta endocrinológica urgente.</li></ul><ul><li>Iniciar insulina en <a style="text-decoration:underline; color: #a69f9f">CIADM</a>.</li></ul><ul><li>Hospitalización si no hay manejo ambulatorio o si hay cetoacidosis.</li></ul>',
				],
				'step-≥3': [
					'<b style="color: #be2bbb">Hiperglucemia: </b><ul><li>Monitoreo continuo de glucosa sérica y considerar HgbA1c.</li></ul><ul><li>Continuar inmunoterapia.</li></ul><ul><li>Evaluar posibles causas:</li></ul><ul><b style="color: #be2bbb">1. </b>Resistencia a la insulina (DM tipo 2).</ul><ul><b style="color: #be2bbb">2. </b>Hiperglucemia inducida por corticosteroides.</ul><ul><li>Intervención médica, cambios en la dieta y ajustes de estilo de vida según protocolos institucionales.</li></ul>',
					'<b style="color: #be2bbb">Diabetes mellitus:</b><ul><li>Hospitalización inmediata si cetoacidosis.</li></ul><ul><li>Suspender inmunoterapia hasta reducción a grado ≤1.</li></ul><ul><li>Manejo intensivo de <a style="text-decoration:underline; color: #a69f9f">DKA</a>: insulina IV, reposición hídrica, monitoreo potasio, glucosa y anión gap.</li></ul><ul><li>Insulina como tratamiento primario.</li></ul><ul><li>Consulta endocrinológica obligatoria.</li></ul>',
				],
			},
		},
		'Insuficiencia suprarrenal': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Asintomático o síntomas leves.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ACTH</a> matutino >2 veces <a style='text-decoration:underline; color: #a69f9f'>LSN</a>.</li><br/><li>Cortisol matutino <3 μg/dl.</li></ul><ul><li>Panel metabólico básico: <a style='text-decoration:underline; color: #a69f9f'>Na</a>, <a style='text-decoration:underline; color: #a69f9f'>K</a>, <a style='text-decoration:underline; color: #a69f9f'>CO₂</a>, glucosa.</li></ul><ul><li>Renina y aldosterona.</li></ul><ul><li>Prueba de estimulación con <a style='text-decoration:underline; color: #a69f9f'>ACTH</a> si cortisol entre 3-15 μg/dl.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> suprarrenal para descartar metástasis o hemorragia.</li></ul><ul><li>Educación sobre dosis de estrés y alerta médica (pulsera, collar).</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Síntomas moderados, paciente sigue siendo funcional.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ACTH</a> matutino >2 veces <a style='text-decoration:underline; color: #a69f9f'>LSN</a>.</li></ul><ul><li>Cortisol matutino <3 μg/dl.</li></ul><ul><li>Panel metabólico básico: <a style='text-decoration:underline; color: #a69f9f'>Na</a>, <a style='text-decoration:underline; color: #a69f9f'>K</a>, <a style='text-decoration:underline; color: #a69f9f'>CO₂</a> glucosa.</li></ul><ul><li>Renina y aldosterona.</li></ul><ul><li>Prueba de estimulación con <a style='text-decoration:underline; color: #a69f9f'>ACTH</a> si cortisol entre 3-15 μg/dl.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> suprarrenal para descartar metástasis o hemorragia.</li></ul><ul><li>Educación sobre dosis de estrés y alerta médica (pulsera, collar).s</li></ul>",
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Síntomas graves, riesgo vital, incapacidad para actividades de la vida diaria (<a style='text-decoration:underline; color: #a69f9f'>AVD</a>).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ACTH</a> matutino >2 veces <a style='text-decoration:underline; color: #a69f9f'>LSN</a>.</li></ul><ul><li>Cortisol matutino <3 μg/dl.</li></ul><ul><li>Panel metabólico básico: <a style='text-decoration:underline; color: #a69f9f'>Na</a>, <a style='text-decoration:underline; color: #a69f9f'>K</a>, <a style='text-decoration:underline; color: #a69f9f'>CO₂</a>, glucosa.</li></ul><ul><li>Renina y aldosterona.</li></ul><ul><li>Prueba de estimulación con <a style='text-decoration:underline; color: #a69f9f'>ACTH</a> si cortisol entre 3-15 μg/dl.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TC</a> suprarrenal para descartar metástasis o hemorragia.</li></ul><ul><li>Educación sobre dosis de estrés y alerta médica (pulsera, collar).</li></ul><ul><li>Monitoreo estrecho.</li></ul>",
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Considerar suspensión temporal de inmunoterapia hasta estabilización.</li></ul><ul><li>Consulta endocrinológica para ajuste.</li></ul><ul><li>Hidrocortisona en dosis divididas (15-20 mg/día, máx. 30 mg/día).</li></ul><ul><li>Fludrocortisona 0,05-0,1 mg/día según volumen, sodio y renina.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender inmunoterapia temporalmente hasta estabilización.</li></ul><ul><li>Consulta endocrinológica urgente.</li></ul><ul><li>Hidratación y soporte si necesario.</li></ul><ul><li>Corticosteroides a 2-3 veces dosis mantenimiento (hidrocortisona 30-50 mg/día o prednisona 20 mg/día).</li></ul><ul><li>Fludrocortisona 0,05-0,1 mg/día.</li></ul><ul><li>Reducción progresiva de dosis de estrés hasta mantenimiento tras 2 días.</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Suspender inmunoterapia hasta estabilización.</li></ul><ul><li>Hospitalización inmediata.</li></ul><ul><li>Reposición con solución salina normal (≥2L).</li></ul><ul><li>Corticosteroides IV en dosis de estrés: Hidrocortisona 50-100 mg cada 6-8 h.</li></ul><ul><li>Reducción progresiva hasta mantenimiento oral en 5-7 días.</li></ul>',
				],
			},
		},
	},

	Neurológico: {
		alert_image: '/Images/neuro-sickness.png',
		width: 216,
		height: 84,
		sickness: [
			{ value: 'Miastenia Gravis', label: 'Miastenia Gravis' },
			{
				value: 'Síndrome Guillain-Barré',
				label: 'Síndrome Guillain-Barré',
			},
			{
				value: 'Neuropatía periférica',
				label: 'Neuropatía periférica',
			},
			{
				value: 'Meningitis ascéptica',
				label: 'Meningitis ascéptica',
			},
			{
				value: 'Encefalitis',
				label: 'Encefalitis',
			},
			{
				value: 'Enfermedades desmielinizantes',
				label: 'Enfermedades desmielinizantes',
			},
		],
		'Miastenia Gravis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Debilidad fluctuante dependiente del ejercicio en extremidades proximales, grupos bulbares y síntomas oculares (ptosis, diplopía).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Monitorización continua de función deglutoria y respiratoria.</li><br/><li>Medición de <a style='text-decoration:underline; color: #a69f9f'>CK</a>.</li></ul><ul><li>Evaluación multidisciplinaria.</li></ul><ul><li>Seguimiento neurológico.</li></ul>",
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Debilidad muscular fatigable o fluctuante, afecta más músculos proximales (cuello, hombros) que distales; .</li></ul><ul><li>Puede haber afectación bulbar y ocular (ptosis, diplopía, disfagia), debilidad facial y respiratoria.</li></ul><ul><li>Interfiere con <a style='text-decoration:underline; color: #a69f9f'>AVD</a>.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>MGFA</a> clase I–II.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Consulta neurológica.</li></ul><ul><li>Anticuerpos <a style='text-decoration:underline; color: #a69f9f'>AChR</a>, <a style='text-decoration:underline; color: #a69f9f'>MuSK</a>, <a style='text-decoration:underline; color: #a69f9f'>LRP4</a>.</li></ul><ul><li>Pruebas pulmonares (<a style='text-decoration:underline; color: #a69f9f'>FIN</a>, <a style='text-decoration:underline; color: #a69f9f'>CV</a>).</li></ul>",
					'<ul><li><a style="text-decoration:underline; color: #a69f9f">CK</a>, aldolasa, <a style="text-decoration:underline; color: #a69f9f">ESR</a>, <a style="text-decoration:underline; color: #a69f9f">CRP</a>.</li><br/><li>Troponina, <a style="text-decoration:underline; color: #a69f9f">ECG</a>, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">MRI</a> cardíaco.</li><br/><li>RM cerebral si síntomas focales. </li><br/><li>Estudios electrodiagnósticos (estimulación repetitiva, jitter, <a style="text-decoration:underline; color: #a69f9f">EMG</a>).</li><br/><li>Descartar miositis, miocarditis y disfunción tiroidea.</li></ul>',
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Autocuidado limitado, paciente requiere ayuda.</li></ul><ul><li>Debilidad que limita la marcha.</li></ul><ul><li>Disfagia.</li></ul><ul><li>Compromiso respiratorio.</li></ul><ul><li>Síntomas rápidamente progresivos.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>MGFA</a> clase III–V.</li></ul><ul><li>Posible crisis miasténica.</li></ul><b style='color: #be2bbb'>Manejo de hipertiroidismo:</b><ul><li>Consulta neurológica.</li></ul><ul><li>Anticuerpos <a style='text-decoration:underline; color: #a69f9f'>AChR</a>, <a style='text-decoration:underline; color: #a69f9f'>MuSK</a>, <a style='text-decoration:underline; color: #a69f9f'>LRP4</a>.</li></ul>",
					'<ul><li>Monitorización respiratoria estrecha (<a style="text-decoration:underline; color: #a69f9f">FIN</a>, <a style="text-decoration:underline; color: #a69f9f">CV</a>).</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">CK</a>, aldolasa, <a style="text-decoration:underline; color: #a69f9f">ESR</a>, <a style="text-decoration:underline; color: #a69f9f">CRP</a>.</li></ul><ul><li>Troponina, <a style="text-decoration:underline; color: #a69f9f">ECG</a>, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">MRI</a> cardíaco.</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral si síntomas focales. </li></ul><ul><li>Estudios electrodiagnósticos (estimulación repetitiva, jitter, <a style="text-decoration:underline; color: #a69f9f">EMG</a>).</li></ul><ul><li>Descartar miositis, miocarditis y disfunción tiroidea.</li></ul><ul><li>Revisión neurológica diaria.</li></ul><ul><li>Posible ingreso a <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Continuar <a style="text-decoration:underline; color: #a69f9f">ICI</a> con vigilancia estrecha. </li></ul><ul><li>Derivar a neurología. </li></ul><ul><li>Monitorizar para detectar deterioro.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Corticoides: prednisona 1–1,5 mg/kg/día <a style="text-decoration:underline; color: #a69f9f">VO</a> (o equivalente), reducción gradual según mejoría.</li></ul><ul><li>Piridostigmina: iniciar 30 mg <a style="text-decoration:underline; color: #a69f9f">VO TID</a>, titular hasta 120 mg <a style="text-decoration:underline; color: #a69f9f">VO QID</a> según tolerancia.</li></ul><ul><li>Considerar hospitalización por riesgo respiratorio.</li></ul><ul>Evaluación pulmonar frecuente.</ul>',
				],
				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> permanentemente. </li></ul><ul><li>Hospitalización/<a style="text-decoration:underline; color: #a69f9f">UCI</a>.</li></ul><ul><li><b style="color: #be2bbb"∂>Corticoides:</b>metilprednisolona IV 1–2 mg/kg/día (taper gradual tras 3–4 semanas).</li></ul><ul><li><b style="color: #be2bbb"∂>IgIV:</b>2 g/kg en 5 días (0,4 g/kg/día) o plasmaféresis 3–5 días. </li></ul><ul><li>Considerar rituximab si refractaria (375 mg/m² semanal × 4 o 500 mg/m² cada 2 semanas ×2).</li></ul><ul><li>Evaluación pulmonar frecuente. </li></ul><ul><li>H7 Evitar fármacos que empeoran <a style="text-decoration:underline; color: #a69f9f">MG</a>.</li></ul>',
				],
			},
		},
		'Síndrome Guillain-Barré': {
			evaluation_select: [
				{
					value: '1',
					label: '1',
				},
				{
					value: '2',
					label: '2',
				},
			],
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Debilidad muscular fatigable o fluctuante, afecta más músculos proximales (cuello, hombros) que distales;</li></ul><ul><li>Puede haber afectación bulbar y ocular   (ptosis, diplopía, disfagia), debilidad facial y respiratoria.</li></ul><ul><li>Interfiere con <a style='text-decoration:underline; color: #a69f9f'>AVD</a>.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>MGFA</a> clase I–II.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Consulta neurológica.</li></ul><ul><li>Anticuerpos <a style='text-decoration:underline; color: #a69f9f'>AChR</a>, <a style='text-decoration:underline; color: #a69f9f'>MuSK</a>, <a style='text-decoration:underline; color: #a69f9f'>LRP4</a>.</li></ul>",
					'<ul><li>Pruebas pulmonares (<a style="text-decoration:underline; color: #a69f9f">FIN</a>, <a style="text-decoration:underline; color: #a69f9f">CV</a>).</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">CK</a>, aldolasa, <a style="text-decoration:underline; color: #a69f9f">ESR</a>, <a style="text-decoration:underline; color: #a69f9f">CRP</a>.</li></ul><ul><li>Troponina, <a style="text-decoration:underline; color: #a69f9f">ECG</a>, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">MRI</a> cardíaco.</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral si síntomas focales. </li></ul><ul><li>Estudios electrodiagnósticos (estimulación repetitiva, jitter, <a style="text-decoration:underline; color: #a69f9f">EMG</a>).</li></ul><ul><li>Descartar miositis, miocarditis y disfunción tiroidea.</li></ul>',
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Limita autocuidado, debilidad que limita la marcha, disfagia, debilidad facial, compromiso respiratorio o progresión rápida. Puede  requerir <a style='text-decoration:underline; color: #a69f9f'>UCI</a>.</li></ul><b style='color: #be2bbb'>Evaluación y estudios:</b><ul><li>Vigilancia respiratoria estrecha.</li></ul><ul><li>Vigilancia neurológica diaria.</li></ul><ul><li>Consulta neurológica.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> columna con y sin contraste (descartar compresión, evaluar engrosamiento radicular).</li></ul>",
					'<ul><li>Punción lumbar (<a style="text-decoration:underline; color: #a69f9f">LCR</a>: proteínas, glucosa, cultivos, citología). anticuerpos antigangliósidos (ej. anti-<a style="text-decoration:underline; color: #a69f9f">GQ1b</a> para variante Miller-Fisher).</li></ul><ul><li>Pruebas de función pulmonar (<a style="text-decoration:underline; color: #a69f9f">NIF</a>, <a style="text-decoration:underline; color: #a69f9f">VC</a>); <a style="text-decoration:underline; color: #a69f9f">EMG</a>/<a style="text-decoration:underline; color: #a69f9f">NCS</a>.</li></ul><ul><li>Monitorización neurológica frecuente.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Suspender ICI.</li></ul><ul><li>Iniciar <a style="text-decoration:underline; color: #a69f9f">IVIG</a> 0,4 g/kg/día × 5 días (total 2 g/kg) o plasmaféresis. </li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> metilprednisolona 2–4 mg/kg/día VO/IV (en formas asociadas a ICI), con disminución gradual.</li></ul><ul><li>Analgesia para dolor neuropático (gabapentina, pregabalina, duloxetina). </li></ul><ul><li>Monitorización respiratoria y autonómica.</li></ul>',
				],
				'step-2': [
					'<ul><li>Continuar inmunoterapia si estable.</li></ul><ul><li>Suspender fármacos nefrotóxicos.</li></ul><ul><li>Repetir creatinina semanalmente.</li></ul><ul><li><b style="color: #be2bbb">Si empeora:</b> descartar otras causas,interrumpir ICI según gravedad.</ul><ul><li>Iniciar prednisona/metilprednisolona 1 mg/kg si sospecha <a style="text-decoration:underline; color: #a69f9f">EARI</a>.</li></ul>',
				],
			},
		},
		'Neuropatía periférica': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Déficit sensitivo aislado o mixto sensitivo + neurona motora inferior; hipo/arreflexia. </li></ul><ul><b>Nota:</b> cualquier compromiso de nervio craneal tratar ∂como moderado.</ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Descartar otras causas (quimioterapia/medicamentos, infecciones, metabólico-endocrino, ambientales, vasculares/autoinmunes, trauma). </li></ul><ul><li><b style='color: #be2bbb'>Panel básico ampliado:</b> <a style='text-decoration:underline; color: #a69f9f'>HbA1c</a>, vitamina B12, <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, vitamina B6, folato, <a style='text-decoration:underline; color: #a69f9f'>SPEP</a> con inmunofijación, <a style='text-decoration:underline; color: #a69f9f'>CPK</a>.</li></ul>",
					'<ul><li><b style="color: #be2bbb">Pruebas adicionales según fenotipo:</b> <a style="text-decoration:underline; color: #a69f9f">ANA</a>, <a style="text-decoration:underline; color: #a69f9f">VSG</a>/<a style="text-decoration:underline; color: #a69f9f">ESR</a>, <a style="text-decoration:underline; color: #a69f9f">PCR</a>/<a style="text-decoration:underline; color: #a69f9f">CRP</a>, <a style="text-decoration:underline; color: #a69f9f">ANCA</a>, anticuerpos antimúsculo liso, <a style="text-decoration:underline; color: #a69f9f">SSA</a>/<a style="text-decoration:underline; color: #a69f9f">SSB</a>, <a style="text-decoration:underline; color: #a69f9f">RNP</a>, anti‑ADNdc, anti‑gangliósido, anti‑<a>MAG</a>, anti‑Hu (<a style="text-decoration:underline; color: #a69f9f">ANNA‑1</a>), tiamina, Lyme, <a style="text-decoration:underline; color: #a69f9f">HBV</a>/<a style="text-decoration:underline; color: #a69f9f">HCV</a>, <a style="text-decoration:underline; color: #a69f9f">VIH</a>. </li></ul><ul><li><b style="color: #be2bbb">Imágenes:</b><a style="text-decoration:underline; color: #a69f9f">RM</a> columna ± contraste; RM cerebral si pares craneales; <a style="text-decoration:underline; color: #a69f9f">RM</a> de plexos si plexopatía. </li></ul><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">EMG</a>/<a style="text-decoration:underline; color: #a69f9f">NCS</a>. </li></ul><ul><li>Derivar a neurología; considerar imágenes neuroaxiales según neurología.</li></ul>',
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Interferencia con AVD, dolor preocupante para el paciente, sin debilidad ni limitación de la marcha.</li></ul><br/><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Descartar otras causas (quimioterapia/medicamentos, infecciones, metabólico-endocrino, ambientales, vasculares/autoinmunes, trauma).</li></ul><uL><li><b style='color: #be2bbb'>Panel básico ampliado:</b> <a style='text-decoration:underline; color: #a69f9f'>HbA1c</a>, vitamina B12, <a style='text-decoration:underline; color: #a69f9f'>TSH</a>, vitamina B6, folato, <a style='text-decoration:underline; color: #a69f9f'>SPEP</a> con inmunofijación, <a style='text-decoration:underline; color: #a69f9f'>CPK</a>.</li></ul><Ul><li><b style='color: #be2bbb'>Pruebas adicionales según fenotipo:</b> <a style='text-decoration:underline; color: #a69f9f'>ANA</a>, <a style='text-decoration:underline; color: #a69f9f'>VSG</a>/<a style='text-decoration:underline; color: #a69f9f'>ESR</a>, <a style='text-decoration:underline; color: #a69f9f'>PCR</a>/<a style='text-decoration:underline; color: #a69f9f'>CRP</a>, <a style='text-decoration:underline; color: #a69f9f'>ANCA</a>, anticuerpos antimúsculo liso, <a style='text-decoration:underline; color: #a69f9f'>SSA</a>/<a style='text-decoration:underline; color: #a69f9f'>SSB</a>, <a style='text-decoration:underline; color: #a69f9f'>RNP</a>, anti‑<a style='text-decoration:underline; color: #a69f9f'>ADNdc</a>, anti‑gangliósido, anti‑<a style='text-decoration:underline; color: #a69f9f'>MAG</a>, anti‑Hu (<a style='text-decoration:underline; color: #a69f9f'>ANNA‑1</a>), tiamina, Lyme, <a style='text-decoration:underline; color: #a69f9f'>HBV</a>/<a style='text-decoration:underline; color: #a69f9f'>HCV</a>, <a style='text-decoration:underline; color: #a69f9f'>VIH</a></li></ul>",
					'<ul><li><b style="color: #be2bbb">Imágenes:</b> <a style="text-decoration:underline; color: #a69f9f">RM</a> columna ± contraste; RM cerebral si pares craneales; RM de plexos si plexopatía.</li></ul><ul><li>Considerar EMG/NCS. </li></ul><ul><li>Derivar a neurología; considerar imágenes neuroaxiales según neurología.</li></ul><ul><li><b style="color: #be2bbb">Punción lumbar:</b> <a style="text-decoration:underline; color: #a69f9f">LCR</a> (recuento y diferencial, proteínas, glucosa, citología para células malignas, cultivos virales/bacterianos). </li></ul>',
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Autocuidado limitado, requiere ayuda; debilidad que limita la marcha o compromiso respiratorio (debilidad en piernas, pie caído, cambios sensoriales de rápido ascenso).</li></ul><ul><li>La ​​neuropatía periférica grave y la ganglionopatía sensorial no son necesariamente un tipo de <a style='text-decoration:underline; color: #a69f9f'>SGB</a>, pero el tratamiento puede ser similar.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Vigilancia respiratoria estrecha.</li></ul><ul><li>Vigilancia neurológica diaria.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> columna con y sin contraste (descartar compresión, evaluar engrosamiento radicular).</li></ul>",
					'<ul><li>Punción lumbar (<a style="text-decoration:underline; color: #a69f9f">LCR</a>: proteínas, glucosa, cultivos, citología). Anticuerpos antigangliósidos (ej. anti-<a style="text-decoration:underline; color: #a69f9f">GQ1b</a> para variante Miller-Fisher).</li></ul><ul><li>Pruebas de función pulmonar (<a style="text-decoration:underline; color: #a69f9f">NIF</a>, <a style="text-decoration:underline; color: #a69f9f">VC</a>); <a style="text-decoration:underline; color: #a69f9f">EMG</a>/<a style="text-decoration:underline; color: #a69f9f">NCS</a>.</li></ul><ul><li>Monitorización neurológica frecuente.</li></ul><ul><li>Evaluación continua de deglución/respiración.</li></ul><ul><li>Medición de <a style="text-decoration:underline; color: #a69f9f">CK</a>.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Umbral bajo para continuar la inmunoterapia; monitorización estrecha 1 semana por progresión.</li></ul><ul><li>Considerar pausar inmunoterapia según evolución.</li></ul><ul><li>Consulta de neurología.</li></ul><ul><li>Monitoreo de síntomas semanal.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender la <a style="text-decoration:underline; color: #a69f9f">ICI</a> y reanudar una vez que regrese a grado 1.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> prednisona 0,5–1 mg/kg/día <a style="text-decoration:underline; color: #a69f9f">VO</a> si progresa desde leve; si progresa, metilprednisolona IV 2–4 mg/kg/día y manejar como <a style="text-decoration:underline; color: #a69f9f">SGB</a> si fenotipo lo sugiere. </li></ul><ul><li><b style="color: #be2bbb">Analgesia:</b> gabapentina, pregabalina o duloxetina.</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Suspender permanentemente la inmunoterapia.</li></ul><ul><li><b style="color: #be2bbb">Ámbito:</b> hospitalización con posibilidad de traslado rápido a <a style="text-decoration:underline; color: #a69f9f">UCI</a> para monitorización respiratoria/autonómica. </li></ul><ul><li><a style="color: #be2bbb">Inmunomodulación (manejo tipo <a style="text-decoration:underline; color: #a69f9f">SGB</a>):</a> <a style="text-decoration:underline; color: #a69f9f">IgIV</a> o <a style="text-decoration:underline; color: #a69f9f">PLEX</a> además de metilprednisolona IV 1 g/día ×5 días y luego reducción gradual durante 4 semanas; alternativa/escala: metilprednisolona IV 2–4 mg/kg/día.</li></ul><ul><li>Consulta de neurología, evaluación neurológica frecuente.  </li></ul><ul><li><b style="color: #be2bbb">Analgesia:</b> gabapentina, pregabalina o duloxetina.</li></ul>',
				],
			},
		},
		'Meningitis ascéptica': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Cefalea, fotofobia, rigidez nucal, náuseas/vómitos; típicamente afebril o febrícula; estado mental normal (distingue de encefalitis).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> cerebral con/sin contraste con protocolo hipofisario/selar; considerar <a style='text-decoration:underline; color: #a69f9f'>RM</a> de columna si examen de extremidades anormal o no realizable. </li></ul><ul><li>Punción lumbar con presión de apertura, recuento celular y diferencial, proteínas, glucosa, tinción de Gram, cultivos bacterianos/virales, <a style='text-decoration:underline; color: #a69f9f'>PCR</a> para <a style='text-decoration:underline; color: #a69f9f'>VHS</a> y otras según sospecha; citología para células malignas (descartar metástasis leptomeníngea).</li></ul>",
					'<ul><li>Cortisol <a style="text-decoration:underline; color: #a69f9f">AM</a> y <a style="text-decoration:underline; color: #a69f9f">ACTH</a> (descartar insuficiencia suprarrenal/hipofisitis). </li></ul><ul><li>En <a style="text-decoration:underline; color: #a69f9f">LCR</a> puede observarse leucocitosis con glucosa y Gram normales; linfocitos, neutrófilos, histiocitos reactivos en citología. </li></ul><ul><li>Consulta con neurología.</li></ul>',
				],
				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Interfieren con <a style='text-decoration:underline; color: #a69f9f'>AVD</a>; dolor/cifalea importante, fotofobia/rigidez nucal sin alteración del estado mental.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> cerebral con/sin contraste con protocolo hipofisario/selar; considerar <a style='text-decoration:underline; color: #a69f9f'>RM</a> de columna si examen de extremidades anormal o no realizable, o si sospecha radicular.</li></ul><ul><li>Punción lumbar con presión de apertura, recuento celular y diferencial, proteínas, glucosa, tinción de Gram, cultivos bacterianos/virales, <a style='text-decoration:underline; color: #a69f9f'>PCR</a> para <a style='text-decoration:underline; color: #a69f9f'>VHS</a> y otras según sospecha; citología para células malignas (descartar metástasis leptomeníngea).</li></ul>",
					'<ul><li>Cortisol <a style="text-decoration:underline; color: #a69f9f">AM</a> y <a style="text-decoration:underline; color: #a69f9f">ACTH</a> (descartar insuficiencia suprarrenal/hipofisitis).</li></ul><ul><li>En <a style="text-decoration:underline; color: #a69f9f">LCR</a> puede observarse leucocitosis con glucosa y Gram normales; linfocitos, neutrófilos, histiocitos reactivos en citología.</li></ul><ul><li>Consulta con neurología.</li></ul><ul><li>Mantener el panel completo de <a style="text-decoration:underline; color: #a69f9f">PL</a> y <a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral/hipófisis.</li></ul>',
				],
				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Autocuidado limitado, necesidad de ayuda; puede coexistir fiebre; si hay alteración del estado mental, pensar en encefalitis (no en meningitis aséptica).</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> cerebral con/sin contraste con protocolo hipofisario/selar; considerar <a style='text-decoration:underline; color: #a69f9f'>RM</a> de columna si examen de extremidades anormal o no realizable, o si sospecha radicular.</li></ul><ul><li>Punción lumbar con presión de apertura, recuento celular y diferencial, proteínas, glucosa, tinción de Gram, cultivos bacterianos/virales, <a style='text-decoration:underline; color: #a69f9f'>PCR</a> para <a style='text-decoration:underline; color: #a69f9f'>VHS</a> y otras según sospecha; citología para células malignas (descartar metástasis leptomeníngea).</li></ul>",
					'<ul><li>Cortisol <a style="text-decoration:underline; color: #a69f9f">AM</a> y <a style="text-decoration:underline; color: #a69f9f">ACTH</a> (descartar insuficiencia suprarrenal/hipofisitis).</li></ul><ul><li>En <a style="text-decoration:underline; color: #a69f9f">LCR</a> puede observarse leucocitosis con glucosa y Gram normales; linfocitos, neutrófilos, histiocitos reactivos en citología. </li></ul><ul><li>Consulta con neurología.</li></ul><ul><li>Mantener el panel completo de <a style="text-decoration:underline; color: #a69f9f">PL</a> y <a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral/hipófisis.</li></ul>',
				],
			},
			manage: {
				'step-1': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> y discutir reanudación tras evaluar riesgo-beneficio.</li></ul><ul><li>Antibióticos empíricos: aciclovir IV y antibióticos hasta descartar infección en <a style="text-decoration:underline; color: #a69f9f">LCR</a>.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> tras excluir infección, prednisona 0,5–1 mg/kg/día VO o metilprednisolona IV 1 mg/kg/día si los síntomas son moderados/graves; disminución gradual de dosis en 2–4 semanas vigilando recurrencia.</li></ul>',
				],
				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>; considerar sus reanudación tras volver a G1.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> prednisona 0,5–1 mg/kg/día; considerar metilprednisolona IV 1 mg/kg/día si síntomas más intensos.</li></ul><ul><li>Antibióticos empíricos hasta excluir infección.</li></ul>',
				],
				'step-≥3': [
					'<ul><li>Suspensión permanente de <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Hospitalización con monitorización estrecha. Antivirales/antibióticos empíricos (aciclovir IV + cobertura bacteriana) hasta resultados negativos.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> tras excluir infección, prednisona 0,5–1 mg/kg/día; si grave, metilprednisolona IV 1–2 mg/kg/día; en refractarios, metilprednisolona IV 1 g/día ×3.</li></ul>',
				],
			},
		},
		'Encefalitis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Confusión, alteración del comportamiento, cefalea, convulsiones, pérdida de memoria a corto plazo, disminución del nivel de conciencia, anomalías del habla, déficits motores o sensoriales.</li></ul><ul><li>Sintomas no limitantes, sin interferencia significativa en las actividades de la <a style='text-decoration:underline; color: #a69f9f'>AVD</a>.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Suspender inmunoterapia en casos leves, moderados o graves. </li></ul><ul><li>Atención hospitalaria si G3-4. </li></ul><ul><li>Terapia antiviral empírica (aciclovir IV) hasta descartar encefalitis viral.</li></ul>",
					'<ul><li>Cobertura antibiótica inicial hasta resultados de cultivos.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> prednisolona oral 0,5–1 mg/kg o metilprednisolona IV 1–2 mg/kg/día.</li></ul><ul><li>En casos refractarios: considerar rituximab</li></ul><ul><li>Taper de esteroides por ≥4–6 semanas.</li></ul><ul><li>Ecografía renal ± Doppler si sospecha obstrucción/trombosis.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Interferencia parcial con AVD, síntomas molestos pero sin debilidad ni limitación de la marcha.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Limitación del autocuidado, necesidad de ayudas.</li></ul><ul><li><b style='color: #be2bbb'>Síntomas severos:</b> alteración marcada de conciencia, déficits neurológicos focales, convulsiones persistentes.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Suspender inmunoterapia en casos leves, moderados o graves. </li></ul><ul><li>Atención hospitalaria si G3-4. </li></ul><ul><li>Terapia antiviral empírica (aciclovir IV) hasta descartar encefalitis viral.</li></ul><ul><li>Cobertura antibiótica inicial hasta resultados de cultivos.</li></ul><ul><li><b style="color: #be2bbb">Corticoides:</b> prednisolona oral 0,5–1 mg/kg o metilprednisolona IV 1–2 mg/kg/día.</li></ul><ul><li>En casos refractarios: considerar rituximab.</li></ul><ul><li>Taper de esteroides por ≥4–6 semanas.</li></ul>',
				],

				'step-2': [
					'<ul><li>Manejo similar a grado 1, con mayor vigilancia clínica. </li></ul><ul><li>Considerar hospitalización si progresión.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Hospitalización obligatoria.</li></ul><ul><li>Suspender inmunoterapia. </li></ul><ul><li>Si los síntomas son graves y progresivos, considerar pulsos de metilprednisolona 1 g IV/día por 3–5 días ± <a style="text-decoration:underline; color: #a69f9f">IgIV</a> o plasmaféresis. </li></ul><ul><li>Rituximab si anticuerpos positivos o falta de respuesta en 7–14 días.</li></ul>',
				],
			},
		},
		'Enfermedades desmielinizantes': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Neuritis óptica (pérdida de visión, dolor ocular, discromatopsia, defecto pupilar aferente, edema de disco óptico).</li></ul><ul><li>Mielitis transversa (debilidad bilateral, alteraciones sensoriales, disfunción intestinal/vesical, hiperreflexia, Babinski positivo).</li></ul><ul><li>Encefalomielitis aguda desmielinizante (cefalea, confusión, convulsiones, alteración del nivel de conciencia, anomalías del habla, debilidad focal, ataxia, pérdida de visión).</li></ul><b style='color: #be2bbb'>Evaluación y estudios:</b><ul><li>Consulta neurológica.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> con contraste de cerebro, órbitas y médula.</li></ul>",
					'<ul><li>Punción lumbar con perfil autoinmune.</li></ul><ul><li>Estudios séricos (<a style="text-decoration:underline; color: #a69f9f">B12</a>, <a style="text-decoration:underline; color: #a69f9f">VIH</a>, <a style="text-decoration:underline; color: #a69f9f">RPR</a>, ANA, <a style="text-decoration:underline; color: #a69f9f">Ro</a>/<a style="text-decoration:underline; color: #a69f9f">La</a>, <a style="text-decoration:underline; color: #a69f9f">TSH</a>, acuaporina-4,  perfiles tiroideos y paraneoplásicos).</li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">EEG</a> si se presentan convulsiones subclínicas. </li></ul><ul><li>Evaluación de retención urinaria/estreñimiento.</li></ul><ul><li>Biopsia en casos poco comunes.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Síntomas moderados, limitantes de la actividades de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Consulta neurológica; descartar infección.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Síntomas graves que limitan las actividades de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> de autocuidado. </li></ul><ul><li>Consecuencias potencialmente mortales.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Consulta neurológica. </li></ul><ul><li>Ingreso hospitalario.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> y estudios complementarios según hallazgos.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar la inmunoterapia a menos que los síntomas empeoren o no mejoren.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Iniciar prednisona 1 mg/kg/día con reducción gradual durante 1 mes. </li></ul><ul><li>Descartar infección.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender permanentemente inmunoterapia.</li></ul><ul><li>Remitir a consulta con neurología. </li></ul><ul><li>Metilprednisolona IV 1 g/día en pulsos.</li></ul><ul><li>Tratamiento sin opioides del dolor neuropático, por ejemplo, pregabalina, gabapentina o duloxetina.</li></ul><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">IVIG</a> o plasmaféresis si no hay mejoría en 3 días; manejo del dolor neuropático con pregabalina, gabapentina o duloxetina.</li></ul>',
				],
			},
		},
	},

	CardioVascular: {
		alert_image: '/Images/CardioVascular-sickness.png',
		width: 180,
		height: 84,
		sickness: [
			{
				value: 'Miocarditis, pericarditis, arritmias, disfunción ventricular con insuficiencia cardíaca y vasculitis',
				label: 'Miocarditis, pericarditis, arritmias, disfunción ventricular con insuficiencia cardíaca y vasculitis',
			},
			{
				value: 'Tromboembolismo',
				label: 'Tromboembolismo',
			},
		],
		'Miocarditis, pericarditis, arritmias, disfunción ventricular con insuficiencia cardíaca y vasculitis':
			{
				test: {
					'step-1': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Biomarcadores cardíacos anormales sin síntomas ni alteraciones en el <a style='text-decoration:underline; color: #a69f9f'>ECG</a>.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ECG</a>comparativo con línea basal.</li></ul><ul><li>Troponina y <a style='text-decoration:underline; color: #a69f9f'>CPK</a> (descartar miositis concurrente).</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>BNP.</a></li></ul><ul><li>Ecocardiograma.</li></ul><ul><li>Radiografía de tórax.</li></ul><ul><li>Monitorización seriada si troponina elevada.</li></ul><ul><li>Considerar <a style='text-decoration:underline; color: #a69f9f'>RM</a> cardíaca si disponible.</li></ul><ul><li>Evaluar síndrome triple (miocarditis, miositis, miastenia) con <a style='text-decoration:underline; color: #a69f9f'>CK</a>, aldolasa, anticuerpos <a style='text-decoration:underline; color: #a69f9f'>AchR</a>.</li></ul>",
					],

					'step-2': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Biomarcadores anormales con síntomas leves o nuevas alteraciones en el ECG sin retraso en la conducción.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ECG.</a></li></ul><ul><li>Troponina y <a style='text-decoration:underline; color: #a69f9f'>CPK</a>.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>BNP.</a></li></ul><ul><li>Ecocardiograma.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> cardíaca (<a style='text-decoration:underline; color: #a69f9f'>T1</a>/<a style='text-decoration:underline; color: #a69f9f'>T1</a>, realce tardío, <a style='text-decoration:underline; color: #a69f9f'>T2-STIR</a>) Considerar cateterismo y biopsia endomiocárdica según criterio clínico.</li></ul><ul><li>Monitorización continua si hay arritmias o bloqueo.</li></ul>",
					],

					'step-≥3': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Biomarcadores anormales con síntomas moderados o graves, retraso en la conducción, insuficiencia cardíaca, choque cardiogénico, bloqueo <a style='text-decoration:underline; color: #a69f9f'>AV</a> completo o taquiarritmias ventriculares.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a style='text-decoration:underline; color: #a69f9f'>ECG</a> continuo.</li></ul><ul><li>Troponina seriada.</li></ul><ul><li>Ecocardiograma.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>RM</a> cardíaca avanzada (mapeo <a style='text-decoration:underline; color: #a69f9f'>T1</a>/<a style='text-decoration:underline; color: #a69f9f'>T2</a>, <a style='text-decoration:underline; color: #a69f9f'>FDG</a>-<a style='text-decoration:underline; color: #a69f9f'>PET</a>-<a style='text-decoration:underline; color: #a69f9f'>TC</a>, <a style='text-decoration:underline; color: #a69f9f'>Ga</a>-<a style='text-decoration:underline; color: #a69f9f'>DOTATOC</a>).</li></ul><ul><li>Angiografía coronaria urgente si inestabilidad.</li></ul><ul><li>Biopsia endomiocárdica. Monitorización hemodinámica.</li></ul>",
					],
				},

				manage: {
					'step-1': [
						'<ul><li>Iniciar corticosteroides IV en dosis altas (metilprednisolona 500–1000 mg/día por 3–5 días).</li></ul><ul><li>Reducir progresivamente con prednisona oral (1–2 mg/kg/día por 4–6 semanas).</li></ul><ul><li>Interrupción temporal del <a style="text-decoration:underline; color: #a69f9f">ICI</a> (frecuente suspensión definitiva).</li></ul><ul><li>Monitorización con <a style="text-decoration:underline; color: #a69f9f">ECG</a> y troponina durante retirada.</li></ul><ul><li>Hospitalización y manejo multidisciplinario (cardio-oncología).</li></ul><ul><li>Precaución con infliximab en <a style="text-decoration:underline; color: #a69f9f">FEVI</a> reducida.</li></ul>',
					],

					'step-2': [
						'<ul><li>Iniciar corticosteroides IV en dosis altas (metilprednisolona 500–1000 mg/día por 3–5 días).</li></ul><ul><li>Reducir progresivamente con prednisona oral (1–2 mg/kg/día por 4–6 semanas)</li></ul><ul><li>Interrupción temporal del <a style="text-decoration:underline; color: #a69f9f">ICI</a> (frecuente suspensión definitiva).</li></ul><ul><li>Monitorización con <a style="text-decoration:underline; color: #a69f9f">ECG</a> y troponina durante retirada.</li></ul><ul><li>Hospitalización y manejo multidisciplinario (cardio-oncología).</li></ul><ul><li>Precaución con infliximab en <a style="text-decoration:underline; color: #a69f9f">FEVI</a> reducida.</li></ul>',
						'<ul><li>Hospitalización obligatoria con vigilancia estrecha.</li></ul><ul><li>Si no hay respuesta en 24–48 h, añadir inmunosupresores: micofenolato mofetilo, abatacept, alemtuzumab, <a style="text-decoration:underline; color: #a69f9f">ATG</a>, <a style="text-decoration:underline; color: #a69f9f">IVIG</a>; considerar tocilizumab</li></ul><ul><li>Manejo en unidad de cuidados coronarios.</li></ul>',
					],

					'step-≥3': [
						'<ul><li>Metilprednisolona IV 1000 mg/día.</li></ul><ul><li>Añadir inmunosupresores de segunda línea (micofenolato, tocilizumab).</li></ul><ul><li>Opciones de tercera línea: <a style="text-decoration:underline; color: #a69f9f">ATG</a>, alemtuzumab, abatacept.</li></ul><ul><li>Soporte circulatorio mecánico (<a style="text-decoration:underline; color: #a69f9f">ECMO</a>, <a style="text-decoration:underline; color: #a69f9f">LVAD</a>,)  si choque cardiogénico.</li></ul><ul><li>Marcapasos si bloqueo <a style="text-decoration:underline; color: #a69f9f">AV</a> completo.</li></ul><ul><li>Betabloqueadores para taquiarritmias.</li></ul><ul><li>Suspensión permanente del <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Manejo en <a style="text-decoration:underline; color: #a69f9f">UCI</a>/<a style="text-decoration:underline; color: #a69f9f">Cardio-UCI</a>.</li></ul>',
					],
				},
			},
		Tromboembolismo: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Trombosis venosa superficial.</li></ul><span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Evaluación de signos y síntomas de <a style='text-decoration:underline; color: #a69f9f'>EP</a> o <a style='text-decoration:underline; color: #a69f9f'>TVP</a>.</li></ul><ul><li>Uso de reglas de predicción clínica para estratificación de riesgo.</li></ul><ul><li>Ecografía venosa en sospecha de <a style='text-decoration:underline; color: #a69f9f'>TVP</a>.</li></ul><ul><li>Angiotomografía pulmonar (<a style='text-decoration:underline; color: #a69f9f'>CTPA</a>) en sospecha de <a style='text-decoration:underline; color: #a69f9f'>EP</a>.</li></ul><ul><li>Considerar dímero D en pacientes de bajo riesgo si no se dispone de <a style='text-decoration:underline; color: #a69f9f'>TC</a> o Doppler.</li></ul>",
					'<ul><li>Gammagrafía V/Q como alternativa si <a style="text-decoration:underline; color: #a69f9f">CTPA</a> no es adecuada.</li></ul><ul><li>Otros estudios: <a style="text-decoration:underline; color: #a69f9f">ECG</a>, radiografía de tórax, <a style="text-decoration:underline; color: #a69f9f">BNP</a>, troponina, gases arteriales.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li><a style='text-decoration:underline; color: #a69f9f'>TVP</a> (por ejemplo, trombosis venosa profunda no complicada), se indica intervención médica.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación de signos y síntomas de <a style='text-decoration:underline; color: #a69f9f'>EP</a> o <a style='text-decoration:underline; color: #a69f9f'>TVP</a> .</li></ul><ul><li>Uso de reglas de predicción clínica para estratificación de riesgo.</li></ul><ul><li>Ecografía venosa en sospecha de <a style='text-decoration:underline; color: #a69f9f'>TVP</a>.</li></ul><ul><li>Énfasis en confirmación diagnóstica mediante ecografía Doppler y <a style='text-decoration:underline; color: #a69f9f'>CTPA</a> si sospecha de <a style='text-decoration:underline; color: #a69f9f'>EP</a></li></ul><ul><li>Considerar dímero D en pacientes de bajo riesgo si no se dispone de <a style='text-decoration:underline; color: #a69f9f'>TC</a> o Doppler.</li></ul>",
					'<ul><li>Gammagrafía <a style="text-decoration:underline; color: #a69f9f">V</a>/<a style="text-decoration:underline; color: #a69f9f">Q</a> como alternativa si CTPA no es adecuada.</li></ul><ul><li>Otros estudios: <a style="text-decoration:underline; color: #a69f9f">ECG</a>, radiografía de tórax, <a style="text-decoration:underline; color: #a69f9f">BNP</a>, troponina, gases arteriales</li></ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Trombosis venosa (por ejemplo, <a style='text-decoration:underline; color: #a69f9f'>EP</a> no complicada) o consecuencias potencialmente mortales: inestabilidad hemodinámica o neurológica, daño orgánico, pérdida de extremidad.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación de signos y síntomas de <a style='text-decoration:underline; color: #a69f9f'>EP</a> o <a style='text-decoration:underline; color: #a69f9f'>TVP</a>.</li></ul><ul><li>Uso de reglas de predicción clínica para estratificación de riesgo.</li></ul><ul><li>Ecografía venosa en sospecha de <a style='text-decoration:underline; color: #a69f9f'>TVP</a>.</li></ul><ul><li>Énfasis en estudios urgentes (<a style='text-decoration:underline; color: #a69f9f'>CTPA</a>, ecografía Doppler, gammagrafía <a style='text-decoration:underline; color: #a69f9f'>V</a>/<a style='text-decoration:underline; color: #a69f9f'>Q</a> si <a style='text-decoration:underline; color: #a69f9f'>CTPA</a> no es adecuada) y monitorización hemodinámica.</li></ul>",
					'<ul><li>Considerar dímero D en pacientes de bajo riesgo si no se dispone de <a style="text-decoration:underline; color: #a69f9f">TC</a> o Doppler.</li></ul><ul><li>Otros estudios: <a style="text-decoration:underline; color: #a69f9f">ECG</a>, radiografía de tórax, <a style="text-decoration:underline; color: #a69f9f">BNP</a>, troponina, gases arteriales</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Compresas tibias.<b style="color: transparent;">holhhlhlhlfsfsffsfsfsfssdfadsfadsf</b></li></ul><ul><li>Vigilancia clínica.</li></ul>',
				],

				'step-2': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Manejo según guías <a style="text-decoration:underline; color: #a69f9f">CHEST</a>, <a style="text-decoration:underline; color: #a69f9f">ACC</a> y/o <a style="text-decoration:underline; color: #a69f9f">AHA</a>; considerar interconsulta con cardiología.</li></ul><ul><li>Anticoagulación inicial con <a style="text-decoration:underline; color: #a69f9f">HBPM</a>, <a style="text-decoration:underline; color: #a69f9f">AVK</a>, dabigatrán, rivaroxabán, apixabán o edoxabán.</li></ul><ul><li>Para anticoagulación prolongada (≥6 meses), preferir <a style="text-decoration:underline; color: #a69f9f">HBPM</a>, edoxabán, rivaroxabán o apixabán sobre <a style="text-decoration:underline; color: #a69f9f">AVK</a>.</li></ul><ul><li>Heparina IV como opción inicial; anticoagulantes orales válidos para tratamiento prolongado.</li></ul><ul><b>Nota:</b> si un paciente presenta un evento tromboembólico arterial, debe evaluarse la posibilidad de vasculitis. Si no se detecta vasculitis, puede considerarse reiniciar el   tratamiento con <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender inmunoterapia; considerar reintroducción según riesgo-beneficio.</li></ul><ul><li>Hospitalización.</li></ul><ul><li>Manejo según guías <a style="text-decoration:underline; color: #a69f9f">CHEST</a>, <a style="text-decoration:underline; color: #a69f9f">ACC</a> y/o <a style="text-decoration:underline; color: #a69f9f">AHA</a>, con apoyo de cardiología.</li></ul><ul><li>Soporte respiratorio y hemodinámico.</li></ul><ul><li>Seguir recomendaciones de anticoagulación del grado 2 y ajustar manejo clínico según evolución:</li></ul><ul><b style="color: #be2bbb">a.</b> Anticoagulación inicial con <a style="text-decoration:underline; color: #a69f9f">HBPM</a>, <a style="text-decoration:underline; color: #a69f9f">AVK</a>, dabigatrán, rivaroxabán, apixabán o edoxabán.</ul><ul><b style="color: #be2bbb">b.</b>Para anticoagulación prolongada (≥6 meses), preferir <a style="text-decoration:underline; color: #a69f9f">HBPM</a>, edoxabán, rivaroxabán o apixabán sobre <a style="text-decoration:underline; color: #a69f9f">AVK</a>.</ul>',
					'<span style="color: #be2bbb"><b>c.</b></span>Heparina IV como opción inicial; anticoagulantes orales válidos para tratamiento prolongado.<ul><b>Nota:</b> si un paciente presenta un evento tromboembólico arterial, debe evaluarse la posibilidad de vasculitis. Si no se detecta vasculitis, puede considerarse reiniciar el tratamiento con  <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</ul>',
				],
			},
		},
	},

	Dermatológico: {
		alert_image: '/Images/Dermatológico-sickness.png',
		width: 216,
		height: 84,
		sickness: [
			{
				value: 'Erupción maculopapular',
				label: 'Erupción maculopapular',
			},
			{
				value: 'Prurito',
				label: 'Prurito',
			},
			{
				value: 'Dermatitis ampollosa',
				label: 'Dermatitis ampollosa',
			},
			{
				value: 'Síndrome de Stevens-Johnson (SJS) o necrólisis epidérmica tóxica (NET) o reacciones adversas cutáneas graves',
				label: 'Síndrome de Stevens-Johnson (SJS) o necrólisis epidérmica tóxica (NET) o reacciones adversas cutáneas graves',
			},
			{
				value: 'Liquen plano y enfermedades liquenoides',
				label: 'Liquen plano y enfermedades liquenoides',
			},
		],
		'Erupción maculopapular': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Lesiones maculopapulares <10 % <a style='text-decoration:underline; color: #a69f9f'>ASC</a>, con o sin prurito, ardor o tirantez.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación clínica completa de piel y mucosas.</li></ul><ul><li>Descartar otras causas (infecciones, fármacos, enfermedades previas).</li></ul><ul><li>Considerar hemograma, perfil metabólico, <a style='text-decoration:underline; color: #a69f9f'>PFH</a>, eosinófilos.</li></ul><ul><li>Posible biopsia si hay hallazgos atípicos.</li></ul><ul><b>Nota:</b> la evaluación clínica inicial siempre incluye examen completo de piel y mucosas, descartar otras causas y considerar estudios básicos (hemograma, perfil metabólico, <a style='text-decoration:underline; color: #a69f9f'>PFH</a>).</ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Lesiones que cubren el 10–30 % del <a style='text-decoration:underline; color: #a69f9f'>ASC</a> con síntomas leves o limitación de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación clínica similar a grado 1.</li></ul><ul><li>Considerar valoración dermatológica y biopsia.</li></ul><ul><li>Monitorización clínica frecuente.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Lesiones >30 % ASC, síntomas moderados o graves, limitan AVD básicas.</li></ul><ul><li><b style='color: #be2bbb'>En grado 4:</b> erupción cutánea potencialmente mortal.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación clínica completa, incluir mucosas, descartar infecciones.</li></ul><ul><li>Valoración dermatológica urgente.</li></ul><ul><li>Considerar biopsia cutánea y dermatoscopia.</li></ul><ul><li>Cultivos si hay sospecha de infección.</li></ul><ul><b>Nota:</b> en grado 3–4 se recomienda suspender inmunoterapia, hospitalización y considerar inmunosupresores adicionales si refractario.</ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Emolientes tópicos.</li></ul><ul><li>Corticoides tópicos de potencia leve a moderada.</li></ul><ul><li>Antihistamínicos orales para prurito.</li></ul><ul><li>Evitar irritantes cutáneos y exposición solar.</li></ul>',
				],

				'step-2': [
					'<ul><li>Continuar o pausar inmunoterapia según respuesta.</li></ul><ul><li>Corticoides tópicos de potencia moderada a alta.</li></ul><ul><li>Emolientes tópicos.</li></ul><ul><li>Antihistamínicos orales.</li></ul><ul><li>Prednisona oral 0,5–1 mg/kg/día si refractario, con descenso gradual en 4 semanas.</li></ul><ul><li>Considerar consulta dermatológica.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender inmunoterapia, depende de la gravedad hacerlo de forma permanente.</li></ul><ul><li>Corticoides tópicos de alta potencia.</li></ul><ul><li>Emolientes tópicos.</li></ul><ul><li>Antihistamínicos orales.</li></ul><ul><li>Prednisona/metilprednisolona oral o IV 1 mg/kg/día (hasta 2 mg/kg si refractario).</li></ul><ul><li>Descenso gradual ≥4 semanas.</li></ul><ul><li>Hospitalización si es necesario.</li></ul><ul><li>Reanudar inmunoterapia solo si mejora a grado 1 y esteroides ≤10 mg/día.</li></ul>',
				],
			},
		},
		Prurito: {
			evaluation_select: [
				{
					value: '1',
					label: 'General',
				},
				{
					value: '2',
					label: 'Leve',
				},
				{
					value: '3',
					label: 'Moderado',
				},
				{
					value: '4',
					label: 'Grave',
				},
			],
			width: '100px',
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Prurito sin erupción cutánea.</li></ul><ul><li>Riesgo de recurrencia tras reducción de esteroides.</li></ul><ul><li>Considerar diagnóstico diferencial (pénfigo, penfigoide, eccema, erupción liquenoide, urticaria).</li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Sensación de picazón leve o localizada, con o sin erupción cutánea.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Examen completo de piel y mucosas.</li></ul><ul><li>Antecedentes de enfermedades dermatológicas inflamatorias.</li></ul>",
				],

				'step-3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Prurito intenso o generalizado, intermitente.</li></ul><ul><li>Cambios cutáneos por rascado (edema, papulación, excoriaciones, liquenificación, supuración/costra).</li></ul><ul><li>Limita actividades de <a style='text-decoration:underline; color: #a69f9f'>AVD</a>.</li></ul>",
				],
				'step-4': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Prurito intenso o generalizado, constante.</li></ul><ul><li>Limita las actividades de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> relacionadas con cuidado personal o sueño.</li></ul><ul><li>Evaluar niveles séricos de <a style='text-decoration:underline; color: #a69f9f'>IgE</a> e histamina.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Antihistamínicos orales.</li></ul><ul><li>Hidratación de todo el cuerpo con crema hidratante sin fragancia.</li></ul>',
				],

				'step-2': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Antihistamínicos orales</li></ul><ul><li>Hidratación con crema sin fragancia.</li></ul><ul><li>Esteroides tópicos de potencia moderada en zonas afectadas.</li></ul><ul><li>Cremas anestésicas/antipruriginosas de venta libre.</li></ul>',
				],

				'step-3': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Esteroides tópicos de alta potencia.</li></ul><ul><li>Gabapentinoides (gabapentina, pregabalina).</li></ul><ul><li>Fototerapia <a style="text-decoration:underline; color: #a69f9f">UVB</a> de banda estrecha en casos resistentes.</li></ul><ul><li>Consulta dermatológica.</li></ul>',
				],

				'step-4': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li><b style="color: #be2bbb">Corticoides sistémicos:</b> prednisona/metilprednisolona IV 0,5–1 mg/kg/día.</li></ul><ul><li>Gabapentinoides.</li></ul><ul><li>Si no hay respuesta en 1 mes: dupilumab, omalizumab o fototerapia <a style="text-decoration:underline; color: #a69f9f">UVB</a>.</li></ul><ul><li>Consulta dermatológica urgente.</li></ul>',
				],
			},
		},
		'Dermatitis ampollosa': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Ampollas <10 % <a style='text-decoration:underline; color: #a69f9f'>ASC</a>, usualmente asintomáticas o poco dolorosas.</li></ul><ul><li>Lesiones cutáneas como vesículas, urticaria persistente, erosiones leves.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Exploración física completa, descartar otras etiologías (infección, fármacos, enfermedad sistémica).</li></ul><ul>Posible biopsia cutánea e inmunofluorescencia directa/indirecta; pruebas serológicas (<a style='text-decoration:underline; color: #a69f9f'>ELISA</a>). </ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Ampollas 10–30 % <a style='text-decoration:underline; color: #a69f9f'>ASC</a>, dolorosas, limitan las actividades de la vida diaria.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación clínica: consulta dermatológica</li></ul><ul><li>Fotografías seriadas para seguimiento.</li></ul><ul><li>Considerar biopsia y serología para confirmar penfigoide ampolloso.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Ampollas >30 % del área superficial del cuerpo (<a style='text-decoration:underline; color: #a69f9f'>ASC</a>), dolorosas, limitan actividades básicas de la vida diaria.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Ingreso hospitalario, consulta dermatológica urgente.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>No suspender inmunoterapia si son ampollas asintomáticas.</li></ul><ul><li>Cuidado local de la herida (pomada de vaselina, vendajes).</li></ul><ul><li>Esteroides tópicos de alta potencia en zonas afectadas.</li></ul><ul><li>Seguimiento estrecho y reevaluación periódica.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender temporalmente inmunoterapia hasta mejoría.</li></ul><ul><li>Prednisona/metilprednisolona oral o IV 0,5–1 mg/kg/día, con reducción gradual ≥4 semanas.</li></ul><ul><li>Esteroides tópicos de alta potencia.</li></ul><ul><li>Hospitalización si no hay acceso a dermatología.</li></ul><ul><li>Considerar rituximab o dupilumab si se confirma penfigoide.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Metilprednisolona IV 1–2 mg/kg/día, luego transición a vía oral con reducción gradual ≥4 semanas.</li></ul><ul><li>Opciones ahorradoras de esteroides: <a style="text-decoration:underline; color: #a69f9f">IVIG</a>, rituximab, dupilumab.</li></ul><ul><li>Se requiere hospitalización. </li></ul><ul><li>Consulta con dermatología.</li></ul>',
				],
			},
		},
		'Síndrome de Stevens-Johnson (SJS) o necrólisis epidérmica tóxica (NET) o reacciones adversas cutáneas graves':
			{
				test: {
					'step-1': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Separación epidérmica: <10 % (<a style='text-decoration:underline; color: #a69f9f'>SJS</a>), 10–30 % (<a style='text-decoration:underline; color: #a69f9f'>SJS</a>/<a style='text-decoration:underline; color: #a69f9f'>NET</a> superpuesto), >30 % (<a style='text-decoration:underline; color: #a69f9f'>NET</a>). </li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul>Evaluación completa de piel y mucosas.</ul><ul><li>Descartar otras etiologías (infección, otros fármacos, dermatosis autoinmune).</li></ul><ul><li><b style='color: #be2bbb'>Estudios:</b> hemograma, función hepática/renal, orina (si sospecha <a style='text-decoration:underline; color: #a69f9f'>DRESS</a>), hemocultivos si fiebre.</li></ul><ul><li>Biopsia cutánea con inmunofluorescencia directa/indirecta y anticuerpos específicos (desmogleínas, antígenos penfigoide).</li></ul><ul><li>Fotografías clínicas seriadas.</li></ul><ul><b>Nota:</b> si hay ampollas/erosiones limitadas, mantener alta sospecha de progresión a grados 3–4.</ul>",
					],

					'step-2': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Separación epidérmica: <10 % (<a style='text-decoration:underline; color: #a69f9f'>SJS</a>), 10–30 % (<a style='text-decoration:underline; color: #a69f9f'>SJS</a>/<a style='text-decoration:underline; color: #a69f9f'>NET</a> superpuesto), >30 % (<a style='text-decoration:underline; color: #a69f9f'>NET</a>). </li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul>Evaluación completa de piel y mucosas.</ul><ul><li>Descartar otras etiologías (infección, otros fármacos, dermatosis autoinmune).</li></ul><ul><li><b style='color: #be2bbb'>Estudios:</b> hemograma, función hepática/renal, orina (si sospecha <a style='text-decoration:underline; color: #a69f9f'>DRESS</a>), hemocultivos si fiebre.</li></ul><ul><li>Biopsia cutánea con inmunofluorescencia directa/indirecta y anticuerpos específicos (desmogleínas, antígenos penfigoide).</li></ul><ul><li>Fotografías clínicas seriadas.</li></ul><ul><b>Nota:</b> si hay ampollas/erosiones limitadas, mantener alta sospecha de progresión a grados 3–4.</ul>",
					],

					'step-≥3': [
						"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Afectación de mucosas con eritema, púrpura, desprendimiento epidérmico.</li></ul><ul><li>Posible necrosis epidérmica parcial.</li></ul><ul><li>Afectación extensa de mucosas y piel (>30 % <a style='text-decoration:underline; color: #a69f9f'>ASC</a>).</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Biopsias cutáneas para evaluar la necrosis epidérmica de espesor completo, como se observa en el <a style='text-decoration:underline; color: #a69f9f'>SJS</a> o el <a style='text-decoration:underline; color: #a69f9f'>NET</a>.</li></ul>",
					],
				},

				manage: {
					'step-1': [
						'<ul><li>Interrumpir inmunoterapia (<a style="text-decoration:underline; color: #a69f9f">ICI</a>) ante sospecha de <a style="text-decoration:underline; color: #a69f9f">SJS</a> o afectación mucosa.</li></ul><ul><li>Consulta dermatológica urgente (si no disponible, biopsia).</li></ul><ul><li>Seguimiento estrecho para comprobar mejoría.</li></ul><ul><li>Considerar ingreso temprano en centro de quemados si hay afectación mucosa o ampollas.</li></ul>',
					],

					'step-2': [
						'<ul><li>Interrumpir inmunoterapia (<a style="text-decoration:underline; color: #a69f9f">ICI</a>) ante sospecha de <a style="text-decoration:underline; color: #a69f9f">SJS</a> o afectación mucosa.</li></ul><ul><li>Consulta dermatológica urgente (si no disponible, biopsia).</li></ul><ul><li>Seguimiento estrecho para comprobar mejoría.</li></ul><ul><li>Considerar ingreso temprano en centro de quemados si hay afectación mucosa o ampollas.</li></ul>',
					],

					'step-≥3': [
						'<ul><li>Suspender definitivamente inmunoterapia.</li></ul><ul><li>Hospitalización inmediata en <a style="text-decoration:underline; color: #a69f9f">UCI</a> o unidad de quemados.</li></ul><ul><li>Metilprednisolona IV 1–2 mg/kg, con reducción progresiva.</li></ul><ul><li>Considerar inmunoglobulina IV (1 g/kg/día por 3–4 días) o ciclosporina en casos graves/no respondedores.</li></ul><ul><li>Consultas multidisciplinarias (dermatología, oftalmología, urología, ginecología, otorrinolaringología).</li></ul><ul><li>Manejo del dolor y cuidados paliativos si corresponde.</li></ul>',
					],
				},
			},
		'Liquen plano y enfermedades liquenoides': {
			evaluation_select: [
				{
					value: '0',
					label: 'Leve',
				},
				{
					value: '1',
					label: 'Moderado',
				},
				{
					value: '2',
					label: 'Grave',
				},
			],
			width: '100px',
			test: {
				'step-0': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Pápulas y placas violáceas (rojo oscuro/púrpura) sin escamas en el tronco y las extremidades, prurito significativo.</li></ul><ul><li>Erosiones y estrías (líneas blancas entrecruzadas) en la mucosa oral y vulvar.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Examen físico.</li></ul><ul><li>Evaluación oral y de las mucosas.</li></ul><ul><li>Considerar la posibilidad de realizar una biopsia cutánea.</li></ul><ul><li>Considerar la posibilidad de remitir a dermatología.</li></ul>",
				],

				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Pápulas y placas violáceas (rojo oscuro/púrpura) sin escamas en el tronco y las extremidades, prurito significativo.</li></ul><ul><li>Erosiones y estrías (líneas blancas entrecruzadas) en la mucosa oral y vulvar.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Examen físico.</li></ul><ul><li>Evaluación oral y de las mucosas.</li></ul><ul><li>Considerar la posibilidad de realizar una biopsia cutánea.</li></ul><ul><li>Considerar la posibilidad de remitir a dermatología.</li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Pápulas y placas violáceas (rojo oscuro/púrpura) sin escamas en el tronco y las extremidades, prurito significativo.</li></ul><ul><li>Erosiones y estrías (líneas blancas entrecruzadas) en la mucosa oral y vulvar.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Examen físico.</li></ul><ul><li>Evaluación oral y de las mucosas.</li></ul><ul><li>Considerar la posibilidad de realizar una biopsia cutánea.</li></ul><ul><li>Considerar la posibilidad de remitir a dermatología.</li></ul>",
				],
			},

			manage: {
				'step-0': [
					'<ul><li>Continuar con la inmunoterapia y evaluar la respuesta a los esteroides tópicos</li></ul><ul><li>Esteroides tópicos de alta potencia o pomada de tacrolimus al 0,1 %</li></ul>',
				],

				'step-1': [
					'<ul><li>Suspender la inmunoterapia.</li></ul><ul><li>Esteroides tópicos de alta potencia o pomada de tacrolimus al 0,1 %.</li></ul><ul><li>Antihistamínicos orales.</li></ul><ul><li>Prednisona 0,5-1 mg/kg/día.</li></ul><ul><li>Fototerapia <a style="text-decoration:underline; color: #a69f9f">UVB</a> de banda estrecha, si está disponible y es viable.</li></ul><ul><li>Si no responde, tratar como grave.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender la inmunoterapia</li></ul><ul><li>Esteroides tópicos de alta potencia o pomada de tacrolimus al 0,1 %</li></ul><ul><li>Prednisona/metilprednisolona intravenosa a 0,5-1 mg/kg/día</li></ul><b style="color: #be2bbb">Considerar: </b><ul><li>Remisión a dermatología</li></ul><ul><li>Inmunosupresores que ahorran esteroides</li></ul><ul><li>Acitretina (si no hay posibilidad de embarazo)</li></ul><ul><li>Doxiciclina y nicotinamidaados paliativos si corresponde.</li></ul>',
				],
			},
		},
	},

	MusculoEsqueletico: {
		alert_image: '/Images/CardioVascular-sickness.png',
		width: 180,
		height: 84,
		sickness: [
			{
				value: 'Artritis inflamatoria',
				label: 'Artritis inflamatoria',
			},
			{
				value: 'Miositis',
				label: 'Miositis',
			},
			{
				value: 'Polimialgia',
				label: 'Polimialgia',
			},
		],
		'Artritis inflamatoria': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Dolor leve con inflamación, eritema o tumefacción articular. </li></ul><ul><li>Compromiso de 1–2 articulaciones. </li></ul><ul><li>Rigidez matutina >1 hora; rigidez post‑inactividad que mejora con la actividad.</li></ul><ul><li>Posible elevación de <a style='text-decoration:underline; color: #a69f9f'>PCR</a> y <a style='text-decoration:underline; color: #a69f9f'>VSG</a>.</li></ul><ul><li>Signos de sinovitis en imágenes.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia reumatológica completa y examen articular (dolor, tumefacción, rango de movimiento) + evaluación de columna.</li></ul>",
					'<ul><li>Radiografía simple o imagen para descartar metástasis y evaluar daño articular; panel autoinmune (<a style="text-decoration:underline; color: #a69f9f">ANA</a>, <a style="text-decoration:underline; color: #a69f9f">FR</a>, anti‑<a style="text-decoration:underline; color: #a69f9f">CCP</a>) e inflamatorios (<a style="text-decoration:underline; color: #a69f9f">ESR</a>/<a style="text-decoration:underline; color: #a69f9f">VSG</a>, <a style="text-decoration:underline; color: #a69f9f">PCR</a>).</li></ul><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">HLA‑B27</a> si compromiso axial; ecografía o <a style="text-decoration:underline; color: #a69f9f">RM</a> con contraste si el diagnóstico de sinovitis no es claro.</li></ul><ul><li>Artrocentesis (recuento celular, Gram/cultivo, cristales) si sospecha séptica o por cristales; considerar otras formas de artritis como gota, infección, pseudogota (diferenciales).</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor y rigidez moderados con signos de inflamación, eritema o tumefacción.</li></ul><ul><li>Limita <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales.</li></ul><ul><li>Persiste sinovitis en imágenes.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Igual que grado 1; si no hay respuesta, considerar imagen (<a style='text-decoration:underline; color: #a69f9f'>US</a>, <a style='text-decoration:underline; color: #a69f9f'>US</a>, <a style='text-decoration:underline; color: #a69f9f'>TC</a>) por artritis refractaria o sospecha de lesión metastásica/sepsis. </li></ul><ul><li>Mantener artrocentesis cuando esté indicada.</li></ul><ul><li>Sostener panel autoinmune; conteo articular y estudios radiografía/<a style='text-decoration:underline; color: #a69f9f'>RM</a>/ecografía según indicación reumatológica.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor grave con inflamación, eritema o tumefacción.</li></ul><ul><li>Limitación de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> básicas. </li></ul><ul><li>Daño irreversible; múltiples articulaciones comprometidas.</li></ul><ul><li>Rigidez matutina >1 hora; signos de sinovitis en imágenes.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>PCR</a>/<a style='text-decoration:underline; color: #a69f9f'>VSG</a> elevadas.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Igual que grados previos.</li></ul><ul><li>Tamizaje previo a <a style='text-decoration:underline; color: #a69f9f'>DMARD</a>/biológicos: hepatitis B y C, <a style='text-decoration:underline; color: #a69f9f'>TB</a> latente; repetir anualmente si tratamiento biológico >1 año.</li></ul>",
					'<ul><li>Continuar imagen avanzada (<a style="text-decoration:underline; color: #a69f9f">US</a>/<a style="text-decoration:underline; color: #a69f9f">RM</a>/<a style="text-decoration:underline; color: #a69f9f">TC</a>) si refractario o diagnóstico diferencial complejo; mantener artrocentesis en sospecha séptica/cristales.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar terapia con <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Iniciar analgésicos y/o <a style="text-decoration:underline; color: #a69f9f">AINE</a>.</li></ul><ul><li>Si <a style="text-decoration:underline; color: #a69f9f">AINE</a> son ineficaces, considerar prednisona 10–20 mg/día; si no se logra reducir la dosis tras 1 semana, suspender inmunoterapia y aumentar prednisona a 30 mg/día.</li></ul><ul><li>Si no se logra reducir prednisona desde 30 mg/día tras 1 semana, considerar iniciar <a style="text-decoration:underline; color: #a69f9f">DMARD</a> sintético convencional (<a style="text-decoration:underline; color: #a69f9f">csDMARD</a>).</li></ul><ul><li>Consulta con reumatología</li></ul><ul><li>Monitoreo con examen reumatológico seriado ± ?<a style="text-decoration:underline; color: #a69f9f">VSG</a>, <a style="text-decoration:underline; color: #a69f9f">PCR</a> cada 4–8 semanas, luego del tratamiento.</li></ul>',
				],

				'step-2': [
					'<ul><li>Considerar suspensión temporal de <a style="text-decoration:underline; color: #a69f9f">ICI</a>. </li></ul><ul><li>Escalar analgésicos/<a style="text-decoration:underline; color: #a69f9f">AINEs</a>; si no mejora, prednisona 10–20 mg/día y reducir en 4–6 semanas.</li></ul><ul><li>Infiltración intraarticular si mono/oligoartritis; si no hay respuesta: hidroxicloroquina, sulfasalazina, metotrexato; si persiste: inhibidor de <a style="text-decoration:underline; color: #a69f9f">IL‑6R</a> (preferido) o <a style="text-decoration:underline; color: #a69f9f">anti‑TNF</a>. </li></ul><ul><li>Consulta con reumatología.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>. </li></ul><ul><li>Prednisona 0,5–1 mg/kg/día (o 1 mg/kg en grado 3) con reevaluación; si no mejora en 2 semanas, <a style="text-decoration:underline; color: #a69f9f">csDMARD</a> (metotrexato, leflunomida, hidroxicloroquina, sulfasalazina) o biológicos (<a style="text-decoration:underline; color: #a69f9f">anti‑TNF</a>, anti‑<a style="text-decoration:underline; color: #a69f9f">IL‑6</a>). </li></ul><ul><li>Pulsos de metilprednisolona (≥2 mg/kg) ±   <a style="text-decoration:underline; color: #a69f9f">IVIG</a> ± plasmaféresis si manifestaciones potencialmente mortales. </li></ul><ul>Precaución: no usar inhibidores de IL‑6 en colitis inmune.</ul><uL>Consulta con reumatología y monitorización (examen ± <a style="text-decoration:underline; color: #a69f9f">VSG</a>/<a style="text-decoration:underline; color: #a69f9f">PCR</a> cada 4–6 semanas).</ul>',
				],
			},
		},
		Miositis: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Debilidad leve con o sin dolor; algunos pacientes pueden estar asintomáticos con <a style='text-decoration:underline; color: #a69f9f'>CK</a> elevada, otros sintomáticos con <a style='text-decoration:underline; color: #a69f9f'>CK</a> normal.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia y examen reumatológico y neurológico (fuerza muscular proximal, flexores del cuello, músculos distales; piel); la debilidad es más típica de miositis que el dolor. </li></ul><ul><li>Revisar condiciones previas que puedan causar síntomas similares. </li></ul><ul><li><b style='color: #be2bbb'>Laboratorio:</b> <a style='text-decoration:underline; color: #a69f9f'>CK</a>, aldolasa, <a style='text-decoration:underline; color: #a69f9f'>AST</a>/<a style='text-decoration:underline; color: #a69f9f'>ALT</a>, <a style='text-decoration:underline; color: #a69f9f'>LDH</a>, troponina (descartar compromiso cardíaco); <a style='text-decoration:underline; color: #a69f9f'>PCR</a>, <a style='text-decoration:underline; color: #a69f9f'>VSG</a>. </li></ul>",
					'<ul><li>Autoanticuerpos: anti-<a style="text-decoration:underline; color: #a69f9f">AChR</a>, antiestriados; considerar autoanticuerpos paraneoplásicos (p. ej., anti‑<a style="text-decoration:underline; color: #a69f9f">TIF1γ</a>, anti‑<a style="text-decoration:underline; color: #a69f9f">NXP2</a>) si hubo manifestaciones musculares previas al <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Cardíaco: <a style="text-decoration:underline; color: #a69f9f">EKG</a>, ecocardiograma o <a style="text-decoration:underline; color: #a69f9f">RM</a> cardíaca si sospecha.</li></ul><ul><li>Electrodiagnóstico/imagen: <a style="text-decoration:underline; color: #a69f9f">EMG</a>, <a style="text-decoration:underline; color: #a69f9f">RM</a> y/o biopsia si diagnóstico incierto. </li></ul><ul><li>Tamizaje de complicación: uroanálisis si sospecha de rabdomiólisis.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Debilidad moderada con o sin dolor. </li></ul><ul><li>Limita <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales. </li></ul><ul><li>Puede coexistir elevación de <a style='text-decoration:underline; color: #a69f9f'>CK</a>/aldolasa.</li></ul><span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Igual que grado 1, con énfasis en: <a style='text-decoration:underline; color: #a69f9f'>CK</a> ≥3× <a style='text-decoration:underline; color: #a69f9f'>ULN</a>, prueba de fuerza muscular (proximal, cervical y distal), <a style='text-decoration:underline; color: #a69f9f'>ECG</a>, troponina. </li></ul><ul><li>Considerar <a style='text-decoration:underline; color: #a69f9f'>RM</a> sin contraste, <a style='text-decoration:underline; color: #a69f9f'>EMG</a>, biopsia muscular y anticuerpos específicos de miositis cuando esté indicado. </li></ul><ul><li>Concomitancias a descartar: miastenia gravis o síndrome similar a miastenia, y miocarditis (la miositis puede coexistir).</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Debilidad severa con o sin dolor.</li></ul><ul><li>Limita <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales. </li></ul><ul><li>Inflamación y/o debilidad que involucra músculos esqueléticos.</li></ul><ul><li>Disfagia, compromiso respiratorio o cardíaco.</li></ul><ul><li>Rabdomiólisis posible.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>CK</a>/aldolasa elevadas.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Igual que grados previos, con ruta urgente: laboratorio completo (<a style='text-decoration:underline; color: #a69f9f'>CK</a>, aldolasa, <a style='text-decoration:underline; color: #a69f9f'>AST</a>/<a style='text-decoration:underline; color: #a69f9f'>ALT</a>, <a style='text-decoration:underline; color: #a69f9f'>LDH</a>, troponina), <a style='text-decoration:underline; color: #a69f9f'>ECG</a>/<a style='text-decoration:underline; color: #a69f9f'>eco</a>/<a style='text-decoration:underline; color: #a69f9f'>RM</a> cardíaca si sospecha.</li></ul>",
					'<ul><li><a style="text-decoration:underline; color: #a69f9f">EMG</a>/<a style="text-decoration:underline; color: #a69f9f">RM</a>/biopsia según criterio.</li></ul><ul><li>Consulta con reumatología/neurología y cardiología si miocarditis/miastenia.</li></ul><ul><li>Monitoreo seriado de <a style="text-decoration:underline; color: #a69f9f">CK</a>/aldolasa hasta resolución y descenso de corticoides.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar <a style="text-decoration:underline; color: #a69f9f">ICI</a>. </li></ul><ul><li>Analgesia (acetaminofén o <a style="text-decoration:underline; color: #a69f9f">AINEs</a>).</li></ul><ul><li>Suspender estatinas. </li></ul><ul><li>Si <a style="text-decoration:underline; color: #a69f9f">CK</a>/aldolasa elevadas y debilidad presente, considerar prednisona 0,5 mg/kg/día.</li></ul><ul><b>Nota:</b> Si grado 1 con <a style="text-decoration:underline; color: #a69f9f">CK</a> elevada y debilidad, manejar como grado 2.</ul>',
				],

				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> temporalmente. </li></ul><ul><li>Referir a reumatología/neurología. </li></ul><ul><li>Si <a style="text-decoration:underline; color: #a69f9f">CK</a> ≥3× <a style="text-decoration:underline; color: #a69f9f">ULN</a>, iniciar prednisona 0,5–1 mg/kg/día. </li></ul><ul><li>No reiniciar <a style="text-decoration:underline; color: #a69f9f">ICI</a> hasta <a style="text-decoration:underline; color: #a69f9f">CK</a> normal y resolución clínica. </li></ul><ul><li>Monitoreo seriado de <a style="text-decoration:underline; color: #a69f9f">CK</a>/aldolasa. </li></ul><ul><li>Si no hay respuesta, reevaluar por miastenia/miocarditis y escalar según grado 3–4.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> (en algunos casos considerar descontinuación permanente). </li></ul><ul><li>Atención hospitalaria. </li></ul><ul><li>Prednisona 1 mg/kg/día o equivalente; para casos graves (disfagia, compromiso cardíaco/respiratorio): metilprednisolona IV 1–2 mg/kg/día o bolos; ± <a style="text-decoration:underline; color: #a69f9f">IVIG</a> (2 g/kg en dosis divididas) ± plasmaféresis (considerar que la plasmaféresis inmediata tras <a style="text-decoration:underline; color: #a69f9f">IVIG</a> remueve la inmunoglobulina).</li></ul><ul><li>Si no mejora en 2–4 semanas, añadir <a style="text-decoration:underline; color: #a69f9f">csDMARD</a>; considerar metotrexato, azatioprina o micofenolato; rituximab ha sido usado en miositis primaria (precaución por duración biológica prolongada). </li></ul>',
				],
			},
		},
		Polimialgia: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Dolor y rigidez leve en hombros y caderas, con rigidez matutina. </li></ul><ul><li>No limita <a style='text-decoration:underline; color: #a69f9f'>AVD</a> básicas.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia reumatológica completa, examen articular. </li></ul><ul><li>Tamizaje de arteritis de células gigantes (<a style='text-decoration:underline; color: #a69f9f'>GCA</a>): síntomas visuales, cefalea, claudicación mandibular, sensibilidad del cuero cabelludo.</li></ul><ul><li>Laboratorio: <a style='text-decoration:underline; color: #a69f9f'>VSG,</a> <a style='text-decoration:underline; color: #a69f9f'>PCR,</a> <a style='text-decoration:underline; color: #a69f9f'>ANA,</a> <a style='text-decoration:underline; color: #a69f9f'>FR,</a> anti-<a style='text-decoration:underline; color: #a69f9f' >CCP,</a> <a style='text-decoration:underline; color: #a69f9f'>CK.</a></li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor y rigidez moderados. </li></ul><ul><li>Limitación de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> instrumentales.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia reumatológica completa, examen articular. </li></ul><ul><li>Tamizaje de arteritis de células gigantes (<a style='text-decoration:underline; color: #a69f9f'>GCA</a>): síntomas visuales, cefalea, claudicación mandibular, sensibilidad del cuero cabelludo.</li></ul><ul><li><b style='color: #be2bbb'>Laboratorio:</b> <a style='text-decoration:underline; color: #a69f9f'>VSG,</a> <a style='text-decoration:underline; color: #a69f9f'>PCR,</a> <a style='text-decoration:underline; color: #a69f9f'>ANA,</a> <a style='text-decoration:underline; color: #a69f9f'>FR,</a> anti-<a style='text-decoration:underline; color: #a69f9f' >CCP,</a> <a style='text-decoration:underline; color: #a69f9f'>CK.</a></li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor y rigidez graves.</li></ul><ul><li>Limitación de <a style='text-decoration:underline; color: #a69f9f'>AVD</a> básicas. </li></ul><ul><li>Riesgo vital.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li><a>Urgente por <a style='text-decoration:underline; color: #a69f9f'>GCA</a> si síntomas visuales o pérdida de visión. </a></li></ul><ul><li><b style='color: #be2bbb'>Laboratorio:</b> <a style='text-decoration:underline; color: #a69f9f'>VSG</a>, <a style='text-decoration:underline; color: #a69f9f'>PCR</a>. </li></ul><ul><li>Interconsulta a oftalmología o cirugía vascular si <a style='text-decoration:underline; color: #a69f9f'>GCA</a>.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia (si no hay síntomas visuales). </li></ul><ul><li>Analgesia con acetaminofén y/o <a style="text-decoration:underline; color: #a69f9f">AINEs</a>. </li></ul><ul><li>Consulta con reumatología Iniciar prednisona 10–20 mg/día con reducción lenta durante 6–8 semanas.</li></ul><ul><li>Si no hay resolución, suspender inmunoterapia y aumentar prednisona a 30–40 mg.</li></ul><ul><li>Si no se logra reducir prednisona o no hay mejoría, considerar <a style="text-decoration:underline; color: #a69f9f">csDMARD</a> (p. ej., metotrexato) o inhibidores de IL-6 (tocilizumab o sarilumab).</li></ul>',
				],

				'step-2': [
					'<ul><li>Considerar suspensión temporal de <a style="text-decoration:underline; color: #a69f9f">ICI</a>. </li></ul><ul><li>Iniciar prednisona 10–20 mg/día (algunos esquemas: 20 mg/día).</li></ul><ul><li>Reducir dosis tras 3–4 semanas si mejora.</li></ul><ul><li>Consulta con reumatología. </li></ul><ul><li>Si no mejora o requiere dosis altas >4 semanas, tratar como grado 3.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Iniciar prednisona 40–60 mg/día o 1 mg/kg/día según severidad. </li></ul><ul><li>En síntomas visuales: metilprednisolona IV 500–1000 mg x 3 días, luego prednisona 1 mg/kg/día con reducción lenta (8–12 semanas o más).</li></ul><ul><li>Considerar ahorradores de esteroides: metotrexato, hidroxicloroquina o inhibidores de <a style="text-decoration:underline; color: #a69f9f">IL-6</a> (tocilizumab/sarilumab). </li></ul><ul><li>Precaución: evitar <a style="text-decoration:underline; color: #a69f9f">IL-6</a> si colitis inmune. </li></ul><ul><li>Hospitalización si síntomas graves. </li></ul><ul><li>Consulta urgente con reumatología.</li></ul>',
				],
			},
		},
	},

	Hematológico: {
		alert_image: '/Images/Hematologico-sickness.png',
		width: 216,
		height: 84,
		sickness: [
			{
				value: 'Anemia hemolítica',
				label: 'Anemia hemolítica',
			},
			{
				value: 'Anemia aplásica',
				label: 'Anemia aplásica',
			},
			{
				value: 'Trombocitopenia',
				label: 'Trombocitopenia',
			},
			{
				value: 'Púrpura Trombótica Trombocitopénica (PTT)',
				label: 'Púrpura Trombótica Trombocitopénica (PTT)',
			},
		],
		'Anemia hemolítica': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Puede ser asintomático o hemoglobina <límite inferior normal a 10 g/dL.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Descartar causas no relacionadas con <a style='text-decoration:underline; color: #a69f9f'>ICI</a> (virus, bacterias, drogas, mordeduras, metahemoglobinemia, fallo medular).</li></ul><ul><li>Historia clínica completa.</li></ul><ul><li>Hemograma completo con diferencial.</li></ul><ul><li><b style='color: #be2bbb'>Evidencia de hemólisis:</b> <a style='text-decoration:underline; color: #a69f9f'>LDH</a> elevada, haptoglobina elevada, bilirrubina indirecta elevada, microesferocitosis, aglutinación en frotis.</li></ul>",
					'<ul><li>Estudios adicionales: <a style="text-decoration:underline; color: #a69f9f">TP</a>, <a style="text-decoration:underline; color: #a69f9f">TTP</a>, <a style="text-decoration:underline; color: #a69f9f">INR</a>, serología autoinmune, <a style="text-decoration:underline; color: #a69f9f">HPN</a>, médula ósea si refractario, niveles <a style="text-decoration:underline; color: #a69f9f">B12</a>/folatos/cobre, infecciones, electroforesis proteínas, crioglobulinas, <a style="text-decoration:underline; color: #a69f9f">G6PD</a>, causas farmacológicas comunes.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Hemoglobina <10 a 8 g/dL; evidencia de hemólisis y caída ≥2 g Hb sin transfusión.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Descartar causas no relacionadas con inmunoterapia (virus, bacterias, drogas, mordeduras, metahemoglobinemia, fallo medular).</li></ul><ul><li>Historia clínica completa.</li></ul><ul><li>Hemograma completo con diferencial.</li></ul><ul><li><b style='color: #be2bbb'>Evidencia de hemólisis:</b> <a style='text-decoration:underline; color: #a69f9f'>LDH</a> elevada, haptoglobina elevada, bilirrubina indirecta elevada, microesferocitosis, aglutinación en frotis.</li></ul>",
					'<ul><li>Prueba de antiglobulina directa (Coombs).</li></ul><ul><li>Estudios adicionales: <a style="text-decoration:underline; color: #a69f9f">TP</a>, <a style="text-decoration:underline; color: #a69f9f">TTP</a>, <a style="text-decoration:underline; color: #a69f9f">INR</a>, serología autoinmune, <a style="text-decoration:underline; color: #a69f9f">HPN</a>, serología autoinmune, <a style="text-decoration:underline; color: #a69f9f">HPN</a>, médula ósea si refractario, niveles <a style="text-decoration:underline; color: #a69f9f">B12</a>/folatos/cobre, infecciones, electroforesis proteínas, crioglobulinas, <a style="text-decoration:underline; color: #a69f9f">G6PD</a>, causas farmacológicas comunes.</li></ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Hemoglobina <8 g/dL.</li></ul><ul>Transfusión indicada.</ul><ul><li>Riesgo vital en grado 4.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Descartar causas no relacionadas con <a style='text-decoration:underline; color: #a69f9f'>ICI</a> (virus, bacterias, drogas, mordeduras, metahemoglobinemia, fallo medular).</li></ul><ul><li>Historia clínica completa.</li></ul><ul><li>Hemograma completo con diferencial.</li></ul><ul><li><b style='color: #be2bbb'>Evidencia de hemólisis:</b> <a style='text-decoration:underline; color: #a69f9f'>LDH</a> elevada, haptoglobina elevada, bilirrubina indirecta elevada, microesferocitosis, aglutinación en frotis.</li></ul>",
					'<ul><li>Prueba de antiglobulina directa (Coombs).</li></ul><ul><li>Estudios adicionales: <a style="text-decoration:underline; color: #a69f9f">TP</a>, <a style="text-decoration:underline; color: #a69f9f">TTP</a>, <a style="text-decoration:underline; color: #a69f9f">INR</a>, serología autoinmune, <a style="text-decoration:underline; color: #a69f9f">HPN</a>, médula ósea si refractario, niveles <a style="text-decoration:underline; color: #a69f9f">B12</a>/folatos/cobre, infecciones, electroforesis proteínas, crioglobulinas, <a style="text-decoration:underline; color: #a69f9f">G6PD</a>, causas farmacológicas comunes. Atención hospitalaria y valoración urgente por hematología.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar <a style="text-decoration:underline; color: #a69f9f">ICI</a> según criterio clínico y resultados de laboratorio.</li></ul><ul><li>Monitoreo frecuente de hemograma y pruebas de hemólisis.</li></ul><ul><li>Considerar derivación a hematología.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> (considerar suspensión permanente).</li></ul><ul><li>Prednisona 0,5–1 mg/kg/día (oral).</li></ul><ul><li>Derivación a hematología.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a> permanentemente.</li></ul><ul><li>Hospitalización.</li></ul><ul><li>Corticoides IV (prednisona o metilprednisolona 1–2 mg/kg/día).</li></ul><ul><li><b style="color: #be2bbb">Transfusión según guías (mantener Hb segura:</b> 7–8 g/dL en pacientes estables).</li></ul><ul><li>Si no hay respuesta tras 3–5 días: añadir rituximab.</li></ul><ul><li><b style="color: #be2bbb">Si persiste:</b> considerar IVIG, tacrolimus, ciclofosfamida, micofenolato mofetil, ciclosporina, ATG o infliximab.</li></ul>',
				],
			},
		},

		'Anemia aplásica': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>ANC >500/mm³, médula hipocelular (<25 %), plaquetas >20 000, reticulocitos >20 000.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia clínica completa (medicamentos, radiación, toxinas, infecciones virales).</li></ul><ul><li>Hemograma completo, frotis, recuento de reticulocitos.</li></ul><ul><li>Estudios virales: <a style='text-decoration:underline; color: #a69f9f'>CMV</a>, <a style='text-decoration:underline; color: #a69f9f'>HHV-6</a>, <a style='text-decoration:underline; color: #a69f9f'>VEB</a>, parvovirus.</li></ul><ul><li>Evaluación nutricional: <a style='text-decoration:underline; color: #a69f9f'>B12</a>, folato, hierro, cobre, vitamina D.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>LDH</a> sérica, función renal.</li></ul>",
					'<ul><li>Biopsia y aspirado de médula ósea.</li></ul><ul><li>Citometría de flujo para <a style="text-decoration:underline; color: #a69f9f">HPN</a>.</li></ul><ul><li>Cribado para transfusiones (irradiadas y filtradas).</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Médula <25 % + 2 criterios: ANC <500, plaquetas <20 000, reticulocitos <20 000.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Confirmación de criterios de gravedad.</li></ul><ul><li>Historia clínica completa (medicamentos, radiación, toxinas, infecciones virales).</li></ul><ul><li>Hemograma completo, frotis, recuento de reticulocitos.</li></ul><ul><li>Estudios virales: <a style='text-decoration:underline; color: #a69f9f'>CMV</a>, <a style='text-decoration:underline; color: #a69f9f'>HHV-6</a>, <a style='text-decoration:underline; color: #a69f9f'>VEB</a>, parvovirus.</li></ul><ul><li>Evaluación nutricional: <a style='text-decoration:underline; color: #a69f9f'>B12</a>, folato, hierro, cobre, vitamina D.</li></ul>",
					'<ul><li><a style="text-decoration:underline; color: #a69f9f">LDH</a> sérica, función renal.</li></ul><ul><li>Biopsia y aspirado de médula ósea.</li></ul><ul><li>Citometría de flujo para <a style="text-decoration:underline; color: #a69f9f">HPN</a>.</li></ul><ul><li>Cribado para transfusiones (irradiadas y filtradas).</li></ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>ANC <200, plaquetas <20 000, reticulocitos <20 000 + médula <25 %.</li></ul><ul><li>Riesgo vital.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Historia clínica completa (medicamentos, radiación, toxinas, infecciones virales).</li></ul><ul><li>Hemograma completo, frotis, recuento de reticulocitos.</li></ul><ul><li>Estudios virales: <a style='text-decoration:underline; color: #a69f9f'>CMV</a>, <a style='text-decoration:underline; color: #a69f9f'>HHV-6</a>, <a style='text-decoration:underline; color: #a69f9f'>VEB</a>, parvovirus.</li></ul><ul><li>Evaluación nutricional: <a style='text-decoration:underline; color: #a69f9f'>B12</a>, folato, hierro, cobre, vitamina D.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>LDH</a> sérica, función renal.</li></ul>",
					'<ul><li>Biopsia y aspirado de médula ósea.</li></ul><ul><li>Citometría de flujo para <a style="text-decoration:underline; color: #a69f9f">HPN</a>.</li></ul><ul><li>Cribado para transfusiones (irradiadas y filtradas).</li></ul><ul><li>Monitoreo semanal hasta mejoría.</li></ul><ul><li>Confirmación de criterios de gravedad:</li></ul><ul><li><b style="color: #be2bbb">Grave:</b> cumplir 2 de los siguientes: reticulocitos <50–60 x10⁹/L, plaquetas <20 x10⁹/L, <a style="text-decoration:underline; color: #a69f9f">ANC</a> <0,5 x10⁹/L.</li></ul><ul><li><b style="color: #be2bbb">Muy grave:</b> igual que grave, pero <a style="text-decoration:underline; color: #a69f9f">ANC</a> <0,2 x10⁹/L.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Ofrecer soporte con factores de crecimiento.</li></ul><ul><li>Seguimiento clínico estricto y evaluación con laboratorios.</li></ul><ul><li>Soporte transfusional según guías.</li></ul><ul><li>Consulta con hematología</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Consultar hematología.</li></ul><ul><li>Administrar <a style="text-decoration:underline; color: #a69f9f">ATG</a> equino + ciclosporina.</li></ul><ul><li>Transfusiones irradiadas y filtradas.</li></ul><ul><li>Evaluar <a style="text-decoration:underline; color: #a69f9f">HLA</a> para trasplante.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Hospitalización.</li></ul><ul><li>Transfusiones según protocolos.</li></ul><ul><li>Soporte con factores de crecimiento (p. ej., <a style="text-decoration:underline; color: #a69f9f">G-CSF</a>).</li></ul><ul><li>Corticoides IV (prednisona o metilprednisolona 1–2 mg/kg/día).</li></ul><ul><li>Si no hay respuesta tras 7 días: considerar <a style="text-decoration:underline; color: #a69f9f">IVIG</a>, ciclosporina, <a style="text-decoration:underline; color: #a69f9f">ATG</a>, micofenolato mofetil y tacrolimus.</li></ul><ul><li>Evaluar tipificación <a style="text-decoration:underline; color: #a69f9f">HLA</a> y trasplante hematopoyético si refractario.</li></ul>',
					'<ul><li><b style="color: #be2bbb">En refractarios:</b> repetir inmunosupresión con <a style="text-decoration:underline; color: #a69f9f">ATG</a> de conejo + ciclosporina y añadir ciclofosfamida; considerar eltrombopag.</li></ul>',
				],
			},
		},

		Trombocitopenia: {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Criterio:</b></span><ul><li>Plaquetas < límite inferior normal – 75 000/mm³.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Hemograma seriado, frotis de sangre periférica, reticulocitos, <a style='text-decoration:underline; color: #a69f9f'>TP</a>/<a style='text-decoration:underline; color: #a69f9f'>TTP</a>/<a style='text-decoration:underline; color: #a69f9f'>INR</a>fibrinógeno, eco abdominal, panel infeccioso (<a style='text-decoration:underline; color: #a69f9f'>VIH</a>, <a style='text-decoration:underline; color: #a69f9f'>VHC</a>, <a style='text-decoration:underline; color: #a69f9f'>H</a>. <a style='text-decoration:underline; color: #a69f9f'>pylori</a>). </li></ul><ul><li>Considerar aspirado/biopsia de médula ósea si otros parámetros alterados o sospecha de anemia aplásica. </li></ul><ul><li><b style='color: #be2bbb'>Descartar causas:</b> fármacos, infecciones, <a style='text-decoration:underline; color: #a69f9f'>PTT</a>, <a style='text-decoration:underline; color: #a69f9f'>SHU</a>, <a style='text-decoration:underline; color: #a69f9f'>HLH</a>.</li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Criterio:</b></span><br/><ul><li><b style='color: #be2bbb'>Grado 3:</b> plaquetas 50 000–25 000/mm³.</li></ul><ul><li><b style='color: #be2bbb'>Grado 4:</b> plaquetas <25 000/mm³.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Hospitalizaión y valoración por hematología.</li></ul><ul><li>Hemograma seriado, frotis de sangre periférica, reticulocitos, <a style='text-decoration:underline; color: #a69f9f'>TP</a>/<a style='text-decoration:underline; color: #a69f9f'>TTP</a>/<a style='text-decoration:underline; color: #a69f9f'>INR</a>/fibrinógeno, eco abdominal, panel infeccioso (<a style='text-decoration:underline; color: #a69f9f'>VIH</a>, <a style='text-decoration:underline; color: #a69f9f'>VHC</a>, H. pylori). </li></ul><ul><li>Considerar aspirado/biopsia de médula ósea si otros parámetros alterados o sospecha de anemia aplásica. </li></ul><ul><li>Descartar causas: fármacos, infecciones, <a style='text-decoration:underline; color: #a69f9f'>PTT</a>, <a style='text-decoration:underline; color: #a69f9f'>SHU</a>, <a style='text-decoration:underline; color: #a69f9f'>HLH</a>.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Criterio:</b></span><br/><ul><li><b style='color: #be2bbb'>Grado 3:</b> plaquetas 50 000–25 000/mm³.</li></ul><ul><li><b style='color: #be2bbb'>Grado 4:</b> plaquetas <25 000/mm³.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Hospitalizaión y valoración por hematología</li></ul><ul><li>Hemograma seriado, frotis de sangre periférica, reticulocitos, <a style='text-decoration:underline; color: #a69f9f'>TP</a>/<a style='text-decoration:underline; color: #a69f9f'>TTP</a>/<a style='text-decoration:underline; color: #a69f9f'>INR</a>/fibrinógeno, eco abdominal, panel infeccioso (<a style='text-decoration:underline; color: #a69f9f'>VIH</a>, <a style='text-decoration:underline; color: #a69f9f'>VHC</a>, <a style='text-decoration:underline; color: #a69f9f'>H</a>. pylori). </li></ul><ul><li>Considerar aspirado/biopsia de médula ósea si otros parámetros alterados o sospecha de anemia aplásica. </li></ul><ul><li>Descartar causas: fármacos, infecciones, <a style='text-decoration:underline; color: #a69f9f'>PTT</a>, <a style='text-decoration:underline; color: #a69f9f'>SHU</a>, <a style='text-decoration:underline; color: #a69f9f'>HLH</a>.</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Suspender inmunoterapia.</li></ul><ul><li>Si no mejora en 4–6 semanas, considerar prednisona o metilprednisolona IV 1 mg/kg/día por 2–4 semanas, luego reducir en 4–6 semanas.</li></ul><ul><li>Añadir <a style="text-decoration:underline; color: #a69f9f">IVIG</a> si hay sangrado.</li></ul><ul><li>Derivación a hematología.</li></ul>',
				],

				'step-2': [
					'<span style="color: #be2bbb"><b>Grado 3:</b></span><ul><li>Suspender inmunoterapia.</li></ul><ul><li>Atención hospitalaria, valoración por hematología.</li></ul><ul><li>Prednisona o metilprednisolona IV 1–2 mg/kg/día</li></ul><ul><li>Añadir <a style="text-decoration:underline; color: #a69f9f">IVIG</a> si hay sangrado.</li></ul><ul>Si no hay respuesta tras 1–2 semanas, considerar rituximab o agonistas del receptor de trombopoyetina (romiplostim, eltrombopag).</ul>',
					'<span style="color: #be2bbb"><b>Grado 4:</b></span><ul><li>Igual manejo que grado 3, con monitoreo intensivo y soporte transfusional según protocolos.</li></ul><span style="color: #be2bbb"><b>Manejo adicional:</b></span><ul><li>Casos graves o refractarios: añadir inmunoglobulina IV (0,5 g/kg/día por 5 días).</li></ul><ul><li>Debe administrarse además de esteroides. También se puede considerar el uso de rituximab.</li></ul>',
				],

				'step-≥3': [
					'<span style="color: #be2bbb"><b>Grado 3:</b></span><ul><li>Suspender inmunoterapia.</li></ul><ul><li>Atención hospitalaria, valoración por hematología.</li></ul><ul><li>Prednisona o metilprednisolona IV 1–2 mg/kg/día.</li></ul><ul><li>Añadir IVIG si hay sangrado.</li></ul><ul><li>Si no hay respuesta tras 1–2 semanas, considerar rituximab o agonistas del receptor de trombopoyetina (romiplostim, eltrombopag).</li></ul>',
					'<span style="color: #be2bbb"><b>Grado 4:</b></span><ul><li>Igual manejo que grado 3, con monitoreo intensivo y soporte transfusional según protocolos.</li></ul><span style="color: #be2bbb"><b>Manejo adicional:</b></span><ul><li>Casos graves o refractarios: añadir inmunoglobulina IV (0,5 g/kg/día por 5 días).</li></ul><ul><li>Debe administrarse además de esteroides. También se puede considerar el uso de rituximab.</li></ul>',
				],
			},
		},

		'Púrpura Trombótica Trombocitopénica (PTT)': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Criterios:</b></span><ul><li>Esquistocitos sin anemia, insuficiencia renal ni trombocitopenia clínica.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Historia dirigida por fármacos (<a style='text-decoration:underline; color: #a69f9f'>CTX</a>, sirolimus, tacrolimus, oximorfona, antibióticos, quinina). </li></ul><ul><li>Hematología. Exploración y frotis para esquistocitos.</li></ul><ul><li><b style='color: #be2bbb'>ADAMTS13:</b> actividad y inhibidor. <a style='text-decoration:underline; color: #a69f9f'>LDH</a>, haptoglobina, reticulocitos, bilirrubina, <a style='text-decoration:underline; color: #a69f9f'>EGO</a>.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TP</a>/<a style='text-decoration:underline; color: #a69f9f'>TTP</a>/fibrinógeno.</li></ul><ul><li>Coombs directo, grupo y anticuerpos. </li></ul>",
					'<ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">TC</a>/<a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">EKG</a>. </li></ul><ul><li>Serología <a style="text-decoration:underline; color: #a69f9f">CMV</a>.</li></ul><ul><b>Nota:</b> este trastorno suele asociarse con una disminución grave del recuento plaquetario y hemólisis o anemia precipitada (microangiopatía).</ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Criterios:</b></span><br/><ul><li>Esquistocitos + anemia y trombocitopenia moderada.</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Historia dirigida por fármacos (<a style='text-decoration:underline; color: #a69f9f'>CTX</a>, sirolimus, tacrolimus, oximorfona, antibióticos, quinina). </li></ul><ul><li>Hematología. Exploración y frotis para esquistocitos. </li></ul><ul><li><b style='color: #be2bbb'>ADAMTS13:</b> actividad y inhibidor. <a style='text-decoration:underline; color: #a69f9f'>LDH</a>, haptoglobina, reticulocitos, bilirrubina, <a style='text-decoration:underline; color: #a69f9f'>EGO</a>.</li></ul><ul><li><a style='text-decoration:underline; color: #a69f9f'>TP</a>/<a style='text-decoration:underline; color: #a69f9f'>TTP</a>/fibrinógeno.</li></ul><ul><li>Coombs directo, grupo y anticuerpos. </li></ul>",
					'<ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">TC</a>/<a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">EKG</a>. </li></ul><ul><li>Serología <a style="text-decoration:underline; color: #a69f9f">CMV</a>.</li></ul><ul><b>Nota:</b> este trastorno suele asociarse con una disminución grave del recuento plaquetario y hemólisis o anemia precipitada (microangiopatía).</ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Criterios:</b></span><br/><ul><li><b style='color: #be2bbb'>Grado 3:</b> hallazgos de laboratorio con consecuencias clínicas (trombocitopenia grave, anemia, insuficiencia renal).</li></ul><ul><li><b style='color: #be2bbb'>Grado 4:</b> consecuencias potencialmente mortales (hemorragia o trombosis <a style='text-decoration:underline; color: #a69f9f'>SNC</a>, insuficiencia renal grave).</li></ul><span style='color: #be2bbb'><b>Evaluación:</b></span><ul><li>Hospitalización</li></ul><ul><li>Historia dirigida por fármacos (<a style='text-decoration:underline; color: #a69f9f'>CTX</a>, sirolimus, tacrolimus, oximorfona, antibióticos, quinina). </li></ul><ul><li>Hematología. Exploración y frotis para esquistocitos.</li></ul>",
					'<ul><li><b style="color: #be2bbb">ADAMTS13</b>: actividad y inhibidor. LDH, haptoglobina, reticulocitos, bilirrubina, EGO. </li></ul><ul><li><a style="text-decoration:underline; color: #a69f9f">TP</a>/<a style="text-decoration:underline; color: #a69f9f">TTP</a>/fibrinógeno.</li></ul><ul><li>Coombs directo, grupo y anticuerpos. </li></ul><ul><li>Considerar <a style="text-decoration:underline; color: #a69f9f">TC</a>/<a style="text-decoration:underline; color: #a69f9f">RM</a> cerebral, <a style="text-decoration:underline; color: #a69f9f">ECO</a>/<a style="text-decoration:underline; color: #a69f9f">EKG</a>. </li></ul><ul><li>Serología <a style="text-decoration:underline; color: #a69f9f">CMV</a>.</li></ul><ul><b>Nota:</b> este trastorno suele asociarse con una disminución grave del recuento plaquetario y hemólisis o anemia precipitada (microangiopatía).</ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Prednisona 0,5–1 mg/kg/día.</li></ul><ul><li>Analice la reanudación con el paciente solo después de considerar los riesgos y beneficios, teniendo en cuenta que actualmente no existen datos que recomienden reiniciar la terapia <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul><ul><li>Prednisona 0,5–1 mg/kg/día.</li></ul><ul><li>Analice la reanudación con el paciente solo después de considerar los riesgos y beneficios, teniendo en cuenta que actualmente no existen datos que recomienden reiniciar la terapia <a style="text-decoration:underline; color: #a69f9f">ICI</a>.</li></ul>',
				],

				'step-≥3': [
					'<span style="color: #be2bbb"><b>Grado 3:</b></span><ul><li>Suspender <a style="text-decoration:underline; color: #a69f9f">ICI</a>. </li></ul><ul><li>Iniciar <a style="text-decoration:underline; color: #a69f9f">PEX</a> según guías. Metilprednisolona 1 g IV por 3 días (primera dosis tras <a style="text-decoration:underline; color: #a69f9f">PEX</a>). </li></ul><ul><li>Considerar rituximab.</li></ul><ul><li>Administre 1 g de metilprednisolona IV al día durante 3 días, aplicando la primera dosis inmediatamente después de la primera <a style="text-decoration:underline; color: #a69f9f">PEX</a>. En pacientes que presenten una respuesta inicial en el recuento plaquetario, suspenda la <a style="text-decoration:underline; color: #a69f9f">PEX</a>.</li></ul>',
					'<span style="color: #be2bbb"><b>Grado 4:</b></span><ul><li>Igual que G3 + considerar caplacizumab si <b style="color: #be2bbb">ADAMTS13</b> <10 % o inhibidor presente.</li></ul><ul><li>Si no se produce una exacerbación en los 3 a 5 días posteriores a la interrupción del tratamiento con PEX, se debe reducir gradualmente la dosis de esteroides durante 2 a 3 semanas, completar el tratamiento con rituximab (si se está administrando) y suspender el tratamiento con caplacizumab (si se está administrando).</li></ul>',
				],
			},
		},
	},

	Ocular: {
		alert_image: '/Images/Ocular-sickness.png',
		width: 216,
		height: 84,
		sickness: [
			{
				value: 'Uveítis',
				label: 'Uveítis',
			},
			{
				value: 'Epiescleritis',
				label: 'Epiescleritis',
			},
			{
				value: 'Escleritis',
				label: 'Escleritis',
			},
			{
				value: 'Queratitis',
				label: 'Queratitis',
			},
			{
				value: 'Maculopatía',
				label: 'Maculopatía',
			},
		],
		'Uveítis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa, puntos ciegos, cambios en visión del color, fotofobia, dolor, hinchazón de párpados, proptosis.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación oftalmológica esencial: agudeza visual, visión del color, pupilas, reflejo rojo, examen fundoscópico, lámpara de hendidura, presión ocular.</li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Dolor ocular, fotofobia marcada, visión doble, cambios en campo visual, escotomas.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación oftalmológica urgente con estudios completos.</li></ul><ul><li>Puede requerir <a style='text-decoration:underline; color: #a69f9f'>RM</a> cerebral si hay síntomas bulbares.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Miodesopsias, pérdida significativa de visión, dolor ocular intenso.</li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul><li>Evaluación oftalmologica inmediata y urgente</li></ul><ul><li>Descartar otras causas graves (patología vascular, <a style='text-decoration:underline; color: #a69f9f'>SNC</a>)</li></ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Derivación a oftalmología (idealmente en ≤1 semana)</li></ul><ul><li>Lágrimas artificiales.</li></ul><ul><li>Corticoides tópicos si es necesario.</li></ul><ul><li>Evitar corticoides sistémicos en casos leves.</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender temporalmente inmunoterapia hasta valoración oftalmológica.</li></ul><ul><li>Corticoides tópicos (prednisolona 1%), agentes ciclopléjicos (atropina).</li></ul><ul><li>Corticoides sistémicos si es necesario.</li></ul><ul><li>Reanudar inmunoterapia cuando se reduzca a ≤<a style="text-decoration:underline; color: #a69f9f">G1</a> y esteroides sistémicos ≤10 mg prednisona equivalente.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender definitivamente inmunoterapia. </li></ul><ul><li>Corticoides sistémicos ± intravítreos/perioculares.</li></ul><ul><li>Metotrexato en casos refractarios a corticoides sistémicos.</li></ul><ul><li>Manejo guiado estrictamente por oftalmología.</li></ul>',
				],
			},
		},

		'Epiescleritis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Puede ser asintomática o presentar:</li></ul><ul><li>Visión borrosa, distorsión, cambios en visión del color, fotofobia, escotomas, diplopía, dolor ocular, sensibilidad, hinchazón de párpados, proptosis, enrojecimiento/sequedad.</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo, visión del color, reflejo rojo, pupilas (tamaño, forma, reactividad), presión ocular, examen fundoscópico con dilatación, examen con lámpara de hendidura, inspección anterior con linterna.</li></ul>",
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Disminución moderada de la visión (≤3 líneas respecto al basal, visión 20/40 o mejor). </li></ul><ul><li>Sintomático con alteraciones visuales más marcadas.</li></ul>",
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Disminución marcada de la visión (peor que 20/40 hasta 20/200).</li></ul><ul><li>Sintomático y visión peor que 2/40.</li></ul><ul><li>En casos graves, visión de 20/200 o peor.</li></ul><ul><li>Pérdida visual grave. </li></ul><span style='color: #be2bbb'><b>Evaluación y estudios:</b></span><ul>Evaluación oftalmologica inmediata y urgente</ul><ul>Descartar otras causas graves (patología vascular, <a style='text-decoration:underline; color: #a69f9f'>SNC</a>)</ul>",
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Lágrimas artificiales.</li></ul><ul><li>Remisión rápida al oftalmólogo (en el plazo de una semana).</li></ul>',
				],

				'step-2': [
					'<ul><li>Suspender temporalmente inmunoterapia hasta valoración oftalmológica.</li></ul><ul><li>Remisión urgente al oftalmólogo.</li></ul><ul><li>Corticoides tópicos (ej. prednisolona 1%), agentes ciclopléjicos (ej. atropina), corticoides sistémicos.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Suspender permanentemente inmunoterapia.</li></ul><ul><li>Remisión urgente al oftalmólogo.</li></ul><ul><li>Corticoides sistémicos y tópicos con ciclopléjicos.</li></ul>',
				],
			},
		},

		'Escleritis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia </li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia</li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><br/><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia </li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>AINEs orales (por ejemplo, flurbiprofeno, indometacina)</li></ul>',
				],

				'step-2': [
					'<ul><li>Pausar la inmunoterapia.</li></ul><ul><li>Tratamiento guiado por oftalmología que incluya prednisona sistémica/metilprednisolona intravenosa.</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Pausar la inmunoterapia.</li></ul><ul><li>Tratamiento guiado por oftalmología que incluya prednisona sistémica/metilprednisolona intravenosa.</li></ul>',
				],
			},
		},

		'Queratitis': {
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia</li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],

				'step-2': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia</li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],

				'step-≥3': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia</li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
					'<ul><li>Reflejo rojo.</li></ul><ul><li>Examen fundoscópico con dilatación.</li></ul><ul><li>Examen con lámpara de hendidura.</li></ul><ul><li>Evaluar otras causas comunes, incluidas las <a style="text-decoration:underline; color: #a69f9f">EI</a>.</li></ul>',
				],
			},

			manage: {
				'step-1': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Lágrimas artificiales.<b style="color: transparent">fgfgfdgdfgdfgssdssss</b></li></ul>',
				],

				'step-2': [
					'<ul><li>Continuar inmunoterapia.</li></ul><ul><li>Gotas tópicas (p. ej., ciclosporina, gotas oftálmicas al 0,05 %, prednisolona, ​​gotas oftálmicas).</li></ul>',
				],

				'step-≥3': [
					'<ul><li>Pausar la inmunoterapia.</li></ul><ul><li>Tratamiento guiado por oftalmología que incluye esteroides oftálmicos o prednisona sistémica/metilprednisolona intravenosa.</li></ul>',
				],
			},
		},

		'Maculopatía': {
			evaluation_select: [
				{
					value: '1',
					label: '1',
				},
			],
			test: {
				'step-1': [
					"<span style='color: #be2bbb'><b>Síntomas:</b></span><ul><li>Visión borrosa / distorsionada</li></ul><ul><li>Puntos ciegos</li></ul><ul><li>Cambios en la visión del color</li></ul><ul><li>Fotofobia </li></ul><ul><li>Sensibilidad/dolor </li></ul><ul><li>Hinchazón de los párpados y proptosis</li></ul><span style='color: #be2bbb'><b>Evaluación de oftalmología:</b></span><ul><li>Agudeza visual en cada ojo.</li></ul><ul><li>Visión del color.</li></ul><ul><li>Tamaño, forma y reactividad de la pupila.<b style='color: transparent'>fgfgfdgdfgdfg</b></li></ul>",
				],
			},

			manage: {
				'step-1': ['<ul><li>Suspender la inmunoterapia.</li></ul><ul><li>Tratamiento guiado por oftalmología que incluya esteroides oftálmicos o prednisona sistémica/metilprednisolona intravenosa.</li></ul>'],
			},
		},
	},
}
