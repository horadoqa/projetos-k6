# Message Broker

Um **Message Broker** é um **componente de software** que atua como intermediário para **troca de mensagens entre sistemas, aplicações ou serviços**. Ele permite que diferentes partes de um sistema se comuniquem de forma **assíncrona**, sem depender de chamadas diretas entre elas.

Vamos detalhar de forma clara:

---

## 🔹 Conceito

Imagine que você tem dois sistemas:

* Um que envia pedidos de compra (Producer)
* Outro que processa esses pedidos (Consumer)

Se o Producer mandar diretamente para o Consumer, ele precisa esperar que o outro sistema esteja online e pronto para receber a mensagem. Isso cria **dependências temporais** e pode gerar falhas se o consumidor estiver ocupado ou indisponível.

Um **Message Broker** entra como um intermediário:

* O Producer envia a mensagem **para o broker**.
* O broker **guarda** ou **encaminha** a mensagem para o Consumer quando ele estiver pronto.
* Isso permite **desacoplamento** e **tolerância a falhas**.

---

## 🔹 Funções principais de um Message Broker

1. **Roteamento de mensagens**
   Decide para qual consumidor ou fila cada mensagem deve ir.

2. **Buffer / fila de mensagens**
   Mantém as mensagens até que o consumidor esteja pronto para processá-las.

3. **Entrega confiável**
   Garante que mensagens não sejam perdidas (ou permite políticas de retry).

4. **Transformação ou filtragem (opcional)**
   Alguns brokers podem modificar ou filtrar mensagens antes de enviá-las.

---

## 🔹 Componentes típicos

* **Producer / Publisher**: sistema que envia mensagens.
* **Consumer / Subscriber**: sistema que recebe mensagens.
* **Queue / Topic**: estrutura que armazena ou distribui mensagens.
* **Exchange / Router (em AMQP)**: decide como a mensagem será encaminhada para a fila correta.

---

## 🔹 Tipos de Message Brokers

1. **Fila (Queue) – Point-to-Point**
   Cada mensagem vai para **uma única fila** e é consumida por **apenas um consumidor**.
   Ex: RabbitMQ, Amazon SQS.

2. **Publicação / Assinatura (Pub/Sub)**
   Uma mensagem é enviada para **vários consumidores simultaneamente**.
   Ex: Kafka, Google Pub/Sub.

3. **Streams**
   Armazena mensagens de forma **persistente** e permite **replay**.
   Ex: Kafka, Pulsar.

---

## 🔹 Benefícios

* Desacoplamento entre sistemas
* Escalabilidade: múltiplos produtores e consumidores
* Tolerância a falhas: mensagens não se perdem se o consumidor estiver offline
* Suporte a arquiteturas assíncronas e microserviços

---

💡 **Analogia:**
Um message broker é como **o correio** entre dois escritórios: você envia uma carta (mensagem) e o correio (broker) garante que ela chegue ao destinatário mesmo que ele não esteja disponível no momento.

---


