// Importa o módulo principal AMQP da extensão xk6-amqp.
// Ele fornece funções para iniciar a conexão e publicar mensagens.
import Amqp from 'k6/x/amqp';

// Importa o módulo de filas (queues).
// Usado para declarar filas no RabbitMQ.
import Queue from 'k6/x/amqp/queue';

// Configuração global do teste de carga
export const options = {
  // Número de usuários virtuais (VUs).
  // Cada VU executa a função default em loop durante a duração do teste.
  vus: 100,

  // Tempo total de execução do teste.
  duration: '30s',
};

// Função executada UMA ÚNICA VEZ antes do início do teste.
// Ideal para:
// - abrir conexões
// - preparar infraestrutura
// - declarar filas/exchanges
export function setup() {
  // URL de conexão com o RabbitMQ
  // formato: amqp://usuario:senha@host:porta/vhost
  const url = 'amqp://guest:guest@localhost:5672/';

  // Inicializa a conexão AMQP.
  // Essa conexão será reutilizada por todos os VUs.
  Amqp.start({ connection_url: url });

  // Nome da fila que será utilizada no teste
  const queueName = 'k6-general';
  
  // Declara a fila no RabbitMQ.
  // Essa operação é idempotente:
  // se a fila já existir, nada acontece.
  Queue.declare({ name: queueName });
  
  // Limpa a fila antes do teste
  Queue.purge( queueName );

  // Log apenas informativo para confirmar que a extensão está ativa
  console.log('AMQP ready, version:', Amqp.version);

  // Retorna dados que serão disponibilizados
  // para a função default e teardown.
  return { queueName };
}

// Função principal do teste.
// Cada VU executa essa função repetidamente durante os 30 segundos.
export default function (data) {
  // Publica uma mensagem na fila configurada no setup.
  Amqp.publish({
    // Nome da fila de destino
    queue_name: data.queueName,

    // Corpo da mensagem.
    // Normalmente é um JSON serializado.
    body: JSON.stringify({
      mensagem: 'Ping from k6',
      timestamp: new Date().toISOString(),
    }),

    // Tipo de conteúdo da mensagem
    content_type: 'application/json',
  });
}

// Função executada UMA ÚNICA VEZ após o término do teste.
// Usada para limpeza ou logs finais.
export function teardown() {
  console.log('Teste finalizado');
}
