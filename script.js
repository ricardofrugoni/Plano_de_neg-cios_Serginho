// Dados do Plano de Negócio - 12 Meses
const businessData = [
    {
        month: 1,
        placasInicio: 0,
        novasPlacas: 2105,
        churn: 0,
        placasFinais: 2105,
        faturamentoBruto: 526250,
        qtdSinistros: 21,
        custoSinistros: 157875,
        faturamentoLiquido: 368375,
        ticketMedioSinistro: 7518,
        crescimentoLiquido: 2105,
        analysis: "🚀 <strong>MÊS 1 - LANÇAMENTO ESTRATÉGICO</strong><br><br>Início da operação com 2.105 placas ativas. Estratégia conservadora estabelece base sólida para crescimento sustentável. Faturamento de R$ 526.250 com sinistralidade controlada em 30%.<br><br>📊 <strong>Indicadores-Chave:</strong><br>• Ticket médio de R$ 250 mantido conforme planejado<br>• Frequência de sinistro de 1% da base (21 ocorrências)<br>• Custo médio por sinistro: R$ 7.518<br>• Margem líquida: 70% após sinistros<br><br>✅ <strong>Fundação Sólida:</strong><br>Base inicial estabelecida com precificação conservadora, permitindo crescimento controlado nos próximos meses. Sinistralidade dentro do esperado demonstra viabilidade do modelo."
    },
    {
        month: 2,
        placasInicio: 2105,
        novasPlacas: 2211,
        churn: 105,
        placasFinais: 4211,
        faturamentoBruto: 1052750,
        qtdSinistros: 42,
        custoSinistros: 315825,
        faturamentoLiquido: 736925,
        ticketMedioSinistro: 7518,
        crescimentoLiquido: 2106,
        analysis: "📈 <strong>MÊS 2 - CONSOLIDAÇÃO DO CRESCIMENTO</strong><br><br>Dobra da base ativa para 4.211 placas. Faturamento passa de R$ 526K para R$ 1.053K (+100%). Churn de 5% controlado, demonstrando satisfação inicial dos clientes.<br><br>🎯 <strong>Performance Destacada:</strong><br>• Crescimento líquido de 2.106 placas<br>• Sinistralidade mantida em 30% (disciplina operacional)<br>• Faturamento líquido cresce para R$ 736.925<br>• Ticket médio de sinistro estável: R$ 7.518<br><br>💡 <strong>Momentum Positivo:</strong><br>Crescimento acelerado sem deterioração da qualidade. Base sólida permite aumento da velocidade de aquisição nos próximos ciclos."
    },
    {
        month: 3,
        placasInicio: 4211,
        novasPlacas: 2321,
        churn: 211,
        placasFinais: 6321,
        faturamentoBruto: 1580250,
        qtdSinistros: 63,
        custoSinistros: 474075,
        faturamentoLiquido: 1106175,
        ticketMedioSinistro: 7525,
        crescimentoLiquido: 2110,
        analysis: "🔥 <strong>MÊS 3 - ACELERAÇÃO SUSTENTÁVEL</strong><br><br>Base atinge 6.321 placas (+50% vs mês anterior). Faturamento bruto de R$ 1.580.250 confirma trajetória ascendente. Sinistralidade controlada demonstra maturidade operacional.<br><br>🚀 <strong>Escalabilidade Comprovada:</strong><br>• Crescimento líquido mantido em 2.110 placas<br>• 63 sinistros processados eficientemente<br>• Faturamento líquido: R$ 1.106.175<br>• Ticket médio sinistro: R$ 7.525 (estabilidade)<br><br>✅ <strong>Modelo Validado:</strong><br>Terceiro mês consecutivo de crescimento sólido. Operação demonstra capacidade de escalar mantendo qualidade e controle de custos."
    },
    {
        month: 4,
        placasInicio: 6321,
        novasPlacas: 2437,
        churn: 316,
        placasFinais: 8442,
        faturamentoBruto: 2110500,
        qtdSinistros: 84,
        custoSinistros: 633150,
        faturamentoLiquido: 1477350,
        ticketMedioSinistro: 7537,
        crescimentoLiquido: 2121,
        analysis: "💪 <strong>MÊS 4 - FORÇA OPERACIONAL</strong><br><br>Base supera 8.000 placas ativas (8.442). Faturamento bruto atinge R$ 2.110.500, consolidando crescimento de 33% mensal. Churn de 5% dentro do planejado.<br><br>⚡ <strong>Operação em Pleno Vapor:</strong><br>• 2.437 novas aquisições no mês<br>• 84 sinistros gerenciados (1% da base)<br>• Faturamento líquido: R$ 1.477.350<br>• Ticket sinistro: R$ 7.537 (consistência)<br><br>🎯 <strong>Meta Intermediária:</strong><br>42% da meta final (20.000 placas) alcançada em apenas 4 meses. Ritmo permite antecipação da meta ou aumento do target."
    },
    {
        month: 5,
        placasInicio: 8442,
        novasPlacas: 2558,
        churn: 422,
        placasFinais: 10578,
        faturamentoBruto: 2644500,
        qtdSinistros: 106,
        custoSinistros: 793350,
        faturamentoLiquido: 1851150,
        ticketMedioSinistro: 7484,
        crescimentoLiquido: 2136,
        analysis: "🌟 <strong>MÊS 5 - MARCO DOS 10.000</strong><br><br>Base supera 10.000 placas ativas (10.578)! Faturamento bruto de R$ 2.644.500 marca novo patamar. Crescimento líquido acelera para 2.136 placas.<br><br>🏆 <strong>Milestone Conquistado:</strong><br>• 10.578 placas ativas (53% da meta final)<br>• 106 sinistros (operação madura)<br>• Faturamento líquido: R$ 1.851.150<br>• Ticket sinistro: R$ 7.484 (otimização)<br><br>🚀 <strong>Momento de Inflexão:</strong><br>Ultrapassar 10.000 placas é marco psicológico importante. Base robusta permite aceleração final rumo aos 20.000."
    },
    {
        month: 6,
        placasInicio: 10578,
        novasPlacas: 2685,
        churn: 529,
        placasFinais: 12734,
        faturamentoBruto: 3183500,
        qtdSinistros: 127,
        custoSinistros: 955050,
        faturamentoLiquido: 2228450,
        ticketMedioSinistro: 7520,
        crescimentoLiquido: 2156,
        analysis: "📊 <strong>MÊS 6 - METADE DO CAMINHO</strong><br><br>Base atinge 12.734 placas (64% da meta). Faturamento bruto de R$ 3.183.500 demonstra solidez financeira. Crescimento líquido de 2.156 placas mantém aceleração.<br><br>💼 <strong>Consolidação Robusta:</strong><br>• 2.685 novas aquisições (recorde até aqui)<br>• 127 sinistros processados eficientemente<br>• Faturamento líquido: R$ 2.228.450<br>• Estabilidade no ticket médio: R$ 7.520<br><br>🎯 <strong>Reta Final à Vista:</strong><br>Duas terças partes da meta cumpridas. Últimos 6 meses focarão em otimização e sprint final para os 20.000."
    },
    {
        month: 7,
        placasInicio: 12734,
        novasPlacas: 2821,
        churn: 637,
        placasFinais: 14918,
        faturamentoBruto: 3729500,
        qtdSinistros: 149,
        custoSinistros: 1118850,
        faturamentoLiquido: 2610650,
        ticketMedioSinistro: 7510,
        crescimentoLiquido: 2184,
        analysis: "🚀 <strong>MÊS 7 - ACELERAÇÃO FINAL</strong><br><br>Base atinge 14.918 placas (75% da meta). Faturamento bruto supera R$ 3.7 milhões. Crescimento líquido acelera para 2.184 placas, preparando sprint final.<br><br>⚡ <strong>Ritmo Intensificado:</strong><br>• 2.821 novas aquisições (novo recorde)<br>• 149 sinistros (escala crescente bem gerenciada)<br>• Faturamento líquido: R$ 2.610.650<br>• Ticket sinistro: R$ 7.510 (controle excepcional)<br><br>🎯 <strong>Reta Final Ativada:</strong><br>Últimos 5 meses para conquistar 5.082 placas restantes. Momentum forte indica meta facilmente alcançável."
    },
    {
        month: 8,
        placasInicio: 14918,
        novasPlacas: 2967,
        churn: 746,
        placasFinais: 17139,
        faturamentoBruto: 4284750,
        qtdSinistros: 171,
        custoSinistros: 1285425,
        faturamentoLiquido: 2999325,
        ticketMedioSinistro: 7517,
        crescimentoLiquido: 2221,
        analysis: "💥 <strong>MÊS 8 - MOMENTUM IMPARÁVEL</strong><br><br>Base explode para 17.139 placas (86% da meta). Faturamento bruto de R$ 4.284.750 confirma escalabilidade. Crescimento líquido de 2.221 placas demonstra força total.<br><br>🔥 <strong>Performance Excepcional:</strong><br>• 2.967 novas aquisições (recorde absoluto)<br>• 171 sinistros (operação de classe mundial)<br>• Faturamento líquido quase R$ 3 milhões<br>• Ticket sinistro: R$ 7.517 (precisão cirúrgica)<br><br>🏁 <strong>Reta Final:</strong><br>Apenas 2.861 placas para a meta de 20.000. Momentum atual permite superação da meta original."
    },
    {
        month: 9,
        placasInicio: 17139,
        novasPlacas: 3124,
        churn: 857,
        placasFinais: 19406,
        faturamentoBruto: 4851500,
        qtdSinistros: 194,
        custoSinistros: 1455450,
        faturamentoLiquido: 3396050,
        ticketMedioSinistro: 7502,
        crescimentoLiquido: 2267,
        analysis: "🎯 <strong>MÊS 9 - QUASE LÁ!</strong><br><br>Base atinge 19.406 placas (97% da meta)! Faturamento bruto supera R$ 4.8 milhões. A apenas 594 placas da meta de 20.000 - praticamente conquistada!<br><br>🏆 <strong>Sucesso à Vista:</strong><br>• 3.124 novas aquisições (explosão final)<br>• 194 sinistros gerenciados com maestria<br>• Faturamento líquido: R$ 3.396.050<br>• Ticket sinistro: R$ 7.502 (excelência operacional)<br><br>🚀 <strong>Meta Praticamente Alcançada:</strong><br>Faltam apenas 594 placas! O mês 10 será de celebração e estabelecimento de novas metas ainda mais ambiciosas."
    },
    {
        month: 10,
        placasInicio: 19406,
        novasPlacas: 3294,
        churn: 970,
        placasFinais: 21730,
        faturamentoBruto: 5432500,
        qtdSinistros: 217,
        custoSinistros: 1629750,
        faturamentoLiquido: 3802750,
        ticketMedioSinistro: 7511,
        crescimentoLiquido: 2324,
        analysis: "🎉 <strong>MÊS 10 - META SUPERADA!</strong><br><br>Base explode para 21.730 placas - 108% da meta original! Faturamento bruto de R$ 5.432.500 coroa o sucesso. Crescimento líquido de 2.324 placas demonstra força total.<br><br>🏆 <strong>SUCESSO ABSOLUTO:</strong><br>• 21.730 placas (1.730 acima da meta!)<br>• 217 sinistros (operação de excelência)<br>• Faturamento líquido: R$ 3.802.750<br>• Ticket sinistro: R$ 7.511 (consistência impecável)<br><br>🚀 <strong>Novo Patamar:</strong><br>Meta não apenas alcançada, mas superada em 8,65%! Base para estabelecer metas ainda mais ambiciosas nos próximos ciclos."
    },
    {
        month: 11,
        placasInicio: 21730,
        novasPlacas: 2479,
        churn: 1087,
        placasFinais: 23122,
        faturamentoBruto: 5780500,
        qtdSinistros: 231,
        custoSinistros: 1734150,
        faturamentoLiquido: 4046350,
        ticketMedioSinistro: 7507,
        crescimentoLiquido: 1392,
        analysis: "🔄 <strong>MÊS 11 - OTIMIZAÇÃO E CONSOLIDAÇÃO</strong><br><br>Base consolida em 23.122 placas. Faturamento bruto atinge R$ 5.780.500. Crescimento mais moderado (1.392 placas) reflete estratégia de otimização vs expansão acelerada.<br><br>⚖️ <strong>Equilibrio Estratégico:</strong><br>• 2.479 novas aquisições (ritmo sustentável)<br>• 231 sinistros (volume crescente bem controlado)<br>• Faturamento líquido: R$ 4.046.350<br>• Ticket sinistro: R$ 7.507 (estabilidade exemplar)<br><br>🎯 <strong>Preparação Final:</strong><br>Ajustes operacionais para atingir exatamente 20.000 placas ativas no mês 12, conforme planejamento original."
    },
    {
        month: 12,
        placasInicio: 23122,
        novasPlacas: 0,
        churn: 1122,
        placasFinais: 22000,
        faturamentoBruto: 5500000,
        qtdSinistros: 220,
        custoSinistros: 1650000,
        faturamentoLiquido: 3850000,
        ticketMedioSinistro: 7500,
        crescimentoLiquido: -1122,
        analysis: "🎯 <strong>MÊS 12 - META EXATA ALCANÇADA!</strong><br><br>Ajuste final resulta em exatos 22.000 placas ativas - 110% da meta original! Faturamento bruto de R$ 5.500.000 fecha o ano com chave de ouro. Estratégia conservadora executada com perfeição.<br><br>🏁 <strong>MISSÃO CUMPRIDA:</strong><br>• 22.000 placas ativas finais (2.000 acima da meta)<br>• 220 sinistros (operação madura e eficiente)<br>• Faturamento líquido: R$ 3.850.000<br>• Ticket sinistro: R$ 7.500 (precisão matemática)<br><br>🏆 <strong>RESULTADO FINAL:</strong><br>Plano de negócio executado com sucesso! Meta de 20.000 placas não apenas alcançada, mas superada em 10%. Base sólida estabelecida para expansão futura."
    }
];

// Variáveis Globais
let currentMonth = 1;
let financialChart, growthChart;

// Funções de Formatação
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatNumber(value) {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// Função Principal - Seleção de Mês
function selectMonth(month) {
    if (month < 1 || month > 12) return;
    
    currentMonth = month;
    
    // Atualizar botão ativo
    document.querySelectorAll('.cycle-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.cycle-btn')[month - 1].classList.add('active');
    
    // Atualizar dashboard
    updateMetrics();
    updateCharts();
    updateAnalysis();
}

// Atualizar Métricas
function updateMetrics() {
    const data = businessData[currentMonth - 1];
    
    // Debug para o mês 12
    if (currentMonth === 12) {
        console.log('Mês 12 - Dados carregados:', data);
        console.log('Novas placas:', data.novasPlacas);
    }
    
    // Calcular informações detalhadas
    const faturamentoInfo = `${data.placasFinais.toLocaleString('pt-BR')} placas × R$ 250,00`;
    
    const previousData = businessData[Math.max(0, currentMonth - 2)];
    const placasInfo = data.placasFinais > 0 && previousData ? 
        `+${((data.placasFinais / (previousData.placasFinais || 1) - 1) * 100).toFixed(1)}% vs mês anterior` : 
        'Primeiro mês de operação';
    
    const novasInfo = `Crescimento líquido: ${data.crescimentoLiquido.toLocaleString('pt-BR')}`;
    
    const sinistrosInfo = `${((data.qtdSinistros / data.placasFinais) * 100).toFixed(1)}% da base ativa`;
    
    const custoInfo = `Sinistralidade: ${((data.custoSinistros / data.faturamentoBruto) * 100).toFixed(1)}% do faturamento`;
    
    const liquidoInfo = `Margem líquida: ${((data.faturamentoLiquido / data.faturamentoBruto) * 100).toFixed(1)}%`;
    
    const churnInfo = currentMonth === 1 ? 'Primeiro mês de operação' : `${((data.churn / previousData.placasFinais) * 100).toFixed(1)}% da base anterior`;
    
    // Atualizar DOM
    document.getElementById('faturamento').textContent = formatCurrency(data.faturamentoBruto);
    document.getElementById('faturamento-info').textContent = faturamentoInfo;
    
    document.getElementById('placas-ativas').textContent = formatNumber(data.placasFinais);
    document.getElementById('placas-info').textContent = placasInfo;
    
    document.getElementById('novas-placas').textContent = formatNumber(data.novasPlacas);
    document.getElementById('novas-info').textContent = novasInfo;
    
    document.getElementById('qtd-sinistros').textContent = formatNumber(data.qtdSinistros);
    document.getElementById('sinistros-info').textContent = sinistrosInfo;
    
    document.getElementById('custo-sinistros').textContent = formatCurrency(data.custoSinistros);
    document.getElementById('custo-info').textContent = custoInfo;
    
    document.getElementById('faturamento-liquido').textContent = formatCurrency(data.faturamentoLiquido);
    document.getElementById('liquido-info').textContent = liquidoInfo;
    
    document.getElementById('churn-placas').textContent = formatNumber(data.churn);
    document.getElementById('churn-info').textContent = churnInfo;
}

// Atualizar Gráficos
function updateCharts() {
    const monthData = businessData.slice(0, currentMonth);
    
    // Se os gráficos não existem, criar
    if (!financialChart) {
        initializeFinancialChart();
    }
    
    if (!growthChart) {
        initializeGrowthChart();
    }
    
    // Atualizar dados dos gráficos existentes
    if (financialChart) {
        financialChart.data.labels = monthData.map(d => `M${d.month}`);
        financialChart.data.datasets[0].data = monthData.map(d => d.faturamentoBruto);
        financialChart.data.datasets[1].data = monthData.map(d => d.faturamentoLiquido);
        financialChart.data.datasets[2].data = monthData.map(d => d.custoSinistros);
        financialChart.update('none');
    }
    
    if (growthChart) {
        growthChart.data.labels = monthData.map(d => `M${d.month}`);
        growthChart.data.datasets[0].data = monthData.map(d => d.placasFinais);
        growthChart.data.datasets[1].data = monthData.map(d => d.qtdSinistros * 100); // Multiplicar por 100 para visualização
        growthChart.update('none');
    }
}

function initializeFinancialChart() {
    const ctxFinancial = document.getElementById('financialChart');
    if (!ctxFinancial) return;
    
    financialChart = new Chart(ctxFinancial, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Faturamento Bruto',
                    data: [],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#4CAF50',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Faturamento Líquido',
                    data: [],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#2196F3',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Custo Sinistros',
                    data: [],
                    borderColor: '#FF5722',
                    backgroundColor: 'rgba(255, 87, 34, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#FF5722',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: { 
                        color: 'white',
                        font: { 
                            size: 12,
                            family: 'Manrope',
                            weight: '500'
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    titleFont: {
                        family: 'Manrope',
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Manrope',
                        weight: '400'
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        },
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

function initializeGrowthChart() {
    const ctxGrowth = document.getElementById('growthChart');
    if (!ctxGrowth) return;
    
    growthChart = new Chart(ctxGrowth, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Placas Ativas',
                    data: [],
                    backgroundColor: 'rgba(33, 150, 243, 0.8)',
                    borderColor: '#2196F3',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Sinistros (x100)',
                    data: [],
                    backgroundColor: 'rgba(255, 87, 34, 0.8)',
                    borderColor: '#FF5722',
                    borderWidth: 1,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: { 
                        color: 'white',
                        font: { 
                            size: 12,
                            family: 'Manrope',
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    titleFont: {
                        family: 'Manrope',
                        weight: '600'
                    },
                    bodyFont: {
                        family: 'Manrope',
                        weight: '400'
                    },
                    callbacks: {
                        label: function(context) {
                            if (context.datasetIndex === 0) {
                                return 'Placas Ativas: ' + formatNumber(context.parsed.y);
                            } else {
                                return 'Sinistros: ' + formatNumber(context.parsed.y / 100);
                            }
                        }
                    }
                }
            },
            scales: {
                x: { 
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: { 
                        color: 'white',
                        font: {
                            family: 'Manrope',
                            weight: '500'
                        },
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

// Atualizar Análise
function updateAnalysis() {
    const data = businessData[currentMonth - 1];
    
    document.getElementById('current-month-title').textContent = `Mês ${data.month} - Análise Detalhada`;
    document.getElementById('freq-sinistro').textContent = '1%';
    document.getElementById('ticket-sinistro').textContent = formatCurrency(data.ticketMedioSinistro);
    document.getElementById('fipe-medio').textContent = 'R$ 48.000,00';
    document.getElementById('churn-mes').textContent = '5%';
    document.getElementById('month-analysis').innerHTML = data.analysis;
}

// Toggle Dropdown
function toggleDropdown(element) {
    const dropdown = element.parentElement;
    dropdown.classList.toggle('active');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Dashboard Plano de Negócio - Inicializado');
    
    updateMetrics();
    updateCharts();
    updateAnalysis();
    
    // Auto-resize dos gráficos
    window.addEventListener('resize', function() {
        if (financialChart) financialChart.resize();
        if (growthChart) growthChart.resize();
    });
});

// Export para uso global
window.selectMonth = selectMonth;
window.toggleDropdown = toggleDropdown;
