import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as n,b as e,d as a,e as i,a as s}from"./app-DBN-V29N.js";const d={},c=s('<h1 id="padroes-de-projeto-de-software-orientado-a-objetos" tabindex="-1"><a class="header-anchor" href="#padroes-de-projeto-de-software-orientado-a-objetos"><span>Padrões de Projeto de Software Orientado a Objetos</span></a></h1><h2 id="introducao" tabindex="-1"><a class="header-anchor" href="#introducao"><span>Introdução</span></a></h2><p>A idéia de padrões foi apresentada por Christopher Alexander em 1977 no contexto de Arquitetura (de prédios e cidades):</p><ul><li>Problemas semelhantes com soluções diferentes</li><li>Reinventando a Roda</li></ul><h2 id="conceito" tabindex="-1"><a class="header-anchor" href="#conceito"><span>Conceito</span></a></h2><p>Também conhecidos como <em>Padrões de Desenho de Software OO</em> ou simplesmente como <em>Padrões</em>.</p><div class="hint-container tip"><p class="hint-container-title">Definição</p><p>Cada padrão descreve um problema que ocorre repetidas vezes em nosso ambiente, e então descreve o núcleo da solução para aquele problema, de tal maneira que pode-se usar essa solução milhões de vezes sem nunca fazê-la da mesma forma duas vezes <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></div><div class="hint-container tip"><p class="hint-container-title">Definição</p><p>Os padrões de projeto são descrições de objetos que se comunicam e classes que são customizadas para resolver um problema genérico de design em um contexto específico <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p></div><h3 id="outras-definicoes" tabindex="-1"><a class="header-anchor" href="#outras-definicoes"><span>Outras definições</span></a></h3><ul><li>Maneira testada ou documentada de alcançar um objetivo qualquer. <ul><li>Padrões são comuns em várias áreas da engenharia.</li></ul></li><li>Design Patterns, ou Padrões de Projeto <ul><li>Padrões para alcançar objetivos na engenharia de software usando classes e métodos em linguagens orientadas a objeto</li><li>Inspirado em &quot;A Pattern Language&quot;de Christopher Alexander, sobre padrões de arquitetura de cidades, casas e prédios</li><li>&quot;Design Patterns&quot;de Erich Gamma, John Vlissides, Ralph Jonhson e Richard Helm, conhecidos como &quot;The Gang of Four&quot;, ou GoF, descreve 23 padrões de projeto úteis</li></ul></li><li>Aprender com a experiência dos outros <ul><li>Identificar problemas comuns em engenharia de software e utilizar soluções testadas e bem documentadas</li><li>Utilizar soluções que têm um nome: facilita a comunicação, compreensão e documentação</li></ul></li><li>Aprender a programar bem com orientação a objetos <ul><li>Os 23 padrões de projeto &quot;clássicos&quot; utilizam as melhores práticas em OO para atingir os resultados desejados</li></ul></li><li>Desenvolver software de melhor qualidade <ul><li>Os padrões utilizam eficientemente polimorfismo, herança, modularidade, composição, abstração para construir código reutilizável, eficiente, de alta coesão e baixo acoplamento</li></ul></li><li>Vocabulário comum <ul><li>Faz o sistema ficar menos complexo ao permitir que se fale em um nível mais alto de abstração</li></ul></li><li>Ajuda na documentação e na aprendizagem <ul><li>Conhecendo os padrões de projeto torna mais fácil a compreensão de sistemas existentes</li><li>&quot;As pessoas que estão aprendendo POO frequentemente reclamam que os sistemas com os quais trabalham usam herança de forma convoluida e que é difí cil de seguir o fluxo de controle. Geralmente a causa disto é que eles não entendem os padrões do sistema&quot;[GoF]</li><li>Aprender os padrões ajudam um novato a agir mais como um especialista</li></ul></li><li>Uma prática adjunta aos métodos existentes <ul><li>Mostram como usar práticas primitivas</li><li>Descrevem mais o porquê do design</li><li>Ajudam a converter um modelo de análise em um modelo de implementação</li></ul></li><li>Um alvo para refatoramento <ul><li>Captura as principais estruturas que resultam do refatoramento</li><li>Uso de patterns desde o iní cio pode diminuir a necessidade de refatoramento</li></ul></li></ul><h2 id="elementos-de-um-padrao" tabindex="-1"><a class="header-anchor" href="#elementos-de-um-padrao"><span>Elementos de um padrão</span></a></h2><ul><li>Nome</li><li>Problema <ul><li>Quando aplicar o padrão, em que condições?</li></ul></li><li>Solução <ul><li>Descrição abstrata de um problema e como usar os elementos disponíveis (classes e objetos) para solucioná-lo</li></ul></li><li>Consequências <ul><li>Custos e benefícios de se aplicar o padrão</li><li>Impacto na flexibilidade, extensibilidade, portabilidade e eficiência do sistema</li></ul></li></ul><table><caption>Tabela de padrões do Gof </caption><tr><td colspan="2" rowspan="2"></td><td colspan="3" style="text-align:center;">Propósito</td></tr><tr><td>De Criação</td><td>Estrutural</td><td>Comportamental</td></tr><tr><td rowspan="2">Escopo</td><td>Classe</td><td class="criacao">Factory Method</td><td class="estrutural">Adapter</td><td class="comportamental">Interpreter<br>Template Method</td></tr><tr><td>Objetivo</td><td class="criacao">Abstract Factory<br>Builder<br>Prototype<br>Singleton</td><td class="estrutural">Adapter<br>Bridge<br>Composite<br>Decorator<br>Facade<br>Flyweight<br>Proxy</td><td class="comportamental">Chain of Responsability<br>Command<br>Iterator<br>Mediator<br>Memento<br>Observer<br>State<br>Strategy<br>Visitor</td></tr></table><figure><img src="https://www.plantuml.com/plantuml/svg/dLRDRjGm4BxxAQpsl7s05A6Mmaezh42qS44Sd7Ws6N3iO3jbznruYS81mPqBrxmOupX_kqXjqjDwxUyRptppurmuBwolIyKkXXLZsaZW9skHUMFtV0E-CFA42yVN6tvQ2GMv1T3d2ZKau_9C2bU0FFUmyt4x6hgKel9W-QbGc46gQeZCONKcZVSzCUn6thKcLcMXvLQeFqUQ9MJBIetgEBJL-NmBPQM4XwdJjvlPzClKUKjXyoxsbd-vVaBGBsfKidLyAVEDDTxuVGNy2UGRrBa2R_HJNBOeSrYSfYjJLiQXNyvy2PcnWdHUpAJq2BdymhNQVmNC2x-OIKdPxHUpJguAWPgRBNyBhZBQYHGL-bXMyMncPPB8fT1oBloQUYOAEm-_0OdBy2LeR-R2NwSExDtyDhxneOLdWobKoFTpyU-HYdLMg6oGSRLwFiISy1kXxYWPXXiED3Lf8GN7W6r-DZyCwvDro7frXxvb5UW82muEW6CR9VoTQu5Pk-KDOuE0qMINh8H6QuaQmyngR-OKdeGAj6n-wmofo8891JlX68lrTdpLIzYIXN2RuA6dK3160pF0QDW7LupZMmjVQWe3N7ysY9xGXRq5GbR21K8mft9ZqPU6ZMt-R4fDobhsAkv842G0XUXgHpkeumvZD7q7Pwv3C45FmUjM8iQwIT0QxcSV0RNppVSW0M_-Qin4R-P1J0yQ9t120kejvhKLbWJQDlUf9IINg4L9Y-0BC3QeqNew39caLPfULLH56oc4JFdcLqwfOR787sTGVJasVGiVeRZcMqbrJ5aWC9M7GCV6Z3z2xakEwkNuocdLo4dLv5QKpRqF0XvJ-bPBk92OeT4ntrNib3yGglB0ix5KY99HZsGXsO5a9mDKKiOTtMpIJvHAnu-Cz4yl9S_YKLI7oA6_4mwwBkbFG6z9ZF-WNIWFHD87I-Y9tL4fmcQrTK7Qq4GV2fGIzCVLQgmtDbRUz7nGXIgq-vOQZxjdctMlz-GWlbai_amF-cd2BcXIq1SVv_tg7m00" alt="uml diagram" loading="lazy"><figcaption> Relação entre os padrões do Gof </figcaption></figure><h2 id="visao-geral-dos-padroes-do-gof" tabindex="-1"><a class="header-anchor" href="#visao-geral-dos-padroes-do-gof"><span>Visão geral dos Padrões do Gof</span></a></h2><h3 id="criacao" tabindex="-1"><a class="header-anchor" href="#criacao"><span>Criação</span></a></h3><ul><li>Factory Method <ul><li>Definir uma interface para criar um objeto mas deixar que subclasses decidam que classe instanciar</li></ul></li><li>Abstract Factory <ul><li>Prover interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas</li></ul></li><li>Builder <ul><li>Separar a construção de objeto complexo da representação para criar representações diferentes com mesmo processo</li></ul></li><li>Prototype <ul><li>Especificar tipos a criar usando uma instância como protótipo e criar novos objetos ao copiar este protótipo</li></ul></li><li>Singleton <ul><li>Garantir que uma classe só tenha uma única instância, e prover um ponto de acesso global a ela</li></ul></li></ul><h3 id="estrutural" tabindex="-1"><a class="header-anchor" href="#estrutural"><span>Estrutural</span></a></h3><ul><li>Adapter <ul><li>Converter a interface de uma classe em outra interface esperada pelos clientes.</li></ul></li><li>Bridge <ul><li>Desacoplar uma abstração de sua implementação para que os dois possam variar independentemente</li></ul></li><li>Composite <ul><li>Permitir o tratamento de objetos individuais e composições desses objetos de maneira uniforme</li></ul></li><li>Decorator <ul><li>Anexar responsabilidades adicionais a um objeto dinamicamente</li></ul></li><li>Façade <ul><li>Oferecer uma interface única de nível mais elevado para um conjunto de interfaces de um subsistema</li></ul></li><li>Flyweight <ul><li>Usar compartilhamento para suportar eficientemente grandes quantidades de objetos complexos</li></ul></li><li>Proxy <ul><li>Prover um substituto ou ponto através do qual um objeto possa controlar o acesso a outro</li></ul></li></ul><h3 id="comportamental" tabindex="-1"><a class="header-anchor" href="#comportamental"><span>Comportamental</span></a></h3><ul><li>Observer <ul><li>Definir uma dependência um-para-muitos entre objetos para que quando um objeto mudar de estado, os seus dependentes sejam notificados e atualizados automaticamente</li></ul></li><li>Mediator <ul><li>Definir um objeto que encapsula a forma como um conjunto de objetos interagem</li></ul></li><li>Chain of Responsibility <ul><li>Compor objetos em cascata para, através dela, delegar uma requisição até que um objeto a sirva</li></ul></li><li>Memento <ul><li>Externalizar o estado interno de um objeto para que o objeto possa ter esse estado restaurado posteriormente</li></ul></li><li>Template Method <ul><li>Definir o esqueleto de um algoritmo dentro de uma operação, deixando alguns passos a serem preenchidos pelas subclasses</li></ul></li><li>State <ul><li>Permitir a um objeto alterar o seu comportamento quanto o seu estado interno mudar</li></ul></li><li>Strategy <ul><li>Definir uma família de algoritmos, encapsular cada um, e fazê-los intercambiáveis</li></ul></li><li>Command <ul><li>Encapsular requisição como objeto, para clientes parametrizarem diferentes requisições, filas, e suportar operações reversíveis</li></ul></li><li>Interpreter <ul><li>Dada uma linguagem, definir uma representação para sua gramática junto com um interpretador</li></ul></li><li>Iterator <ul><li>Prover uma maneira de acessar elementos de um objeto agregado sequencialmente sem expor sua representação interna</li></ul></li><li>Visitor <ul><li>Representar uma operação a ser realizada sobre os elementos de uma estrutura de objetos</li></ul></li></ul><h2 id="como-os-padroes-solucionam-problemas" tabindex="-1"><a class="header-anchor" href="#como-os-padroes-solucionam-problemas"><span>Como os padrões solucionam problemas?</span></a></h2><h3 id="quais-os-objetos-mais-apropriados" tabindex="-1"><a class="header-anchor" href="#quais-os-objetos-mais-apropriados"><span>Quais os objetos mais apropriados?</span></a></h3><ul><li>A tarefa de decompor um sistema em objetos não é trivial</li><li>É preciso levar em conta fatores como encapsulamento, granularidade, dependência, flexibilidade, performance, reuso, etc.</li><li>Muitos objetos são descobertos na fase de análise, mas muitos não têm paralelo no mundo real</li><li>Design patterns ajudam a identificar as abstrações menos óbvias e objetos que podem representá-las</li><li>Exemplo: objetos que representam um algoritmo ou um estado (raramente aparecem na fase de análise)</li></ul><h3 id="qual-a-granularidade-ideal" tabindex="-1"><a class="header-anchor" href="#qual-a-granularidade-ideal"><span>Qual a granularidade ideal?</span></a></h3><ul><li>Objetos podem representar qualquer coisa</li><li>Um objeto pode representar todos os detalhes até o hardware ou ser a aplicação inteira</li><li>Design patterns oferecem várias soluções</li><li>Façade descreve como representar subsistemas inteiros como um único objeto</li><li>Flyweight descreve como suportar grandes quantidades de objetos nas menores granularidades</li><li>Abstract Factory, Builder, Visitor e Command limitam a responsabilidade de objetos</li></ul><h3 id="como-especificar-interfaces" tabindex="-1"><a class="header-anchor" href="#como-especificar-interfaces"><span>Como especificar interfaces?</span></a></h3><ul><li>Uma interface é o conjunto de todas as assinaturas* definidas pelas operações de um objeto</li><li>Objetos são conhecidos apenas através de suas interfaces em sistemas orientados a objetos</li><li>A interface de um objeto nada diz sobre sua implementação, que pode ser determinada em tempo de execução</li><li>Design patterns ajudam a definir interfaces ao identificar seus elementos-chave e tipos de dados que são passados</li><li>Podem restringir o que se pode colocar em uma interface</li><li>Podem especificar relacionamentos entre interfaces</li><li>Podem estabelecer regras para criação de interfaces</li></ul><h3 id="como-especificar-implementacoes" tabindex="-1"><a class="header-anchor" href="#como-especificar-implementacoes"><span>Como especificar implementações</span></a></h3><ul><li>Objetos só devem ser manipulados em termos de uma interface definida por classes abstratas (ou interfaces Java)</li><li>Clientes não devem conhecer os tipos concretos dos objetos, nem das classes que implementam esses objetos. Só devem conhecer as classes abstratas que definem a interface</li><li>Princípio de design reutilizável: programe para uma interface, nunca para uma implementação</li><li>Design patterns oferecem formas de instanciar classes concretas em outras partes do sistema</li><li>Padrões de construção abstraem o processo de criação de objetos oferecendo um meio transparente para associar uma interface com uma implementação.</li></ul><h3 id="como-fazer-o-reuso-funcionar" tabindex="-1"><a class="header-anchor" href="#como-fazer-o-reuso-funcionar"><span>Como fazer o reuso funcionar</span></a></h3><ul><li>Deve-se usar herança de classes com cautela. Há quebra de encapsulamento na herança porque ela expõe a subclasse a detalhes da implementação da superclasse</li><li>Dando preferência à composição de objetos sobre herança de classes ajuda a manter o encapsulamento e o foco de cada classe em uma única tarefa</li><li>Princípio de design reutilizável: dê preferência à composição de objetos sobre herança de classe</li><li>Design patterns usam delegação para tornar a composição tão poderosa para reuso quando a herança</li><li>Dois objetos estão envolvidos para tratar uma requisição: o objeto que recebe a requisição passa uma referência de si mesmo para o objeto delegado</li><li>Exemplo: Janela <em>tem</em> um retângulo (em vez de ser um)</li></ul><figure><img src="https://www.plantuml.com/plantuml/svg/PP113i8W44NtSug_L9Dw01QcPt3ZcfHf8K58wDGkJEzkgRGakljavhtveHr59vcUdjeZTLwF8nukc3Y_2NX5Pw0JwzEPbZAzSoSw39xpGk-Z5ipEY3rUbjrWvO-chnPDokFcLaLGI7ic2b4Oddj1x4iLfR9bDIQMAOMwVIrs3WQPA_Hs8UF7YL_3rXYNlMlbgLtp-XN0dZu0" alt="uml diagram" loading="lazy"><figcaption> Representação de Delegação </figcaption></figure><ul><li>Vantagem: facilita a composição de comportamentos em tempo de execução</li><li>Desvantagem: possível performance menor; código mais difícil de acompanhar. <ul><li>Delegação é uma boa escolha de design somente quando ela simplifica mais que complica!</li><li>Funciona melhor quando usada de forma padrão. Patterns!</li></ul></li></ul><h3 id="como-distinguir-estruturas-estaticas-compile-time-e-dinamicas-run-time" tabindex="-1"><a class="header-anchor" href="#como-distinguir-estruturas-estaticas-compile-time-e-dinamicas-run-time"><span>Como distinguir estruturas estáticas (compile-time) e dinâmicas (run-time)?</span></a></h3><ul><li>A estrutura em tempo de execução de um programa orientado a objetos mantém pouca semelhança com sua estrutura de código: código não revela como sistema funciona!</li><li>Estrutura estática: hierarquias fixas e imutáveis</li><li>Estrutura dinâmica: redes mutáveis de objetos interagindo</li><li>Exemplo: agregação e associação são implementadas da mesma forma (em código) mas se mostram muito diferentes em tempo de execução</li><li>Vários design patterns capturam a distinção entre estruturas run-time e compile-time As estruturas não são óbvias pelo código. É preciso entender os padrões!</li></ul><h3 id="como-antecipar-mudancas" tabindex="-1"><a class="header-anchor" href="#como-antecipar-mudancas"><span>Como antecipar mudanças?</span></a></h3><ul><li>Os padrões viabilizam o desenvolvimento de código mais robusto diante de possíveis mudanças e refatoramento do código</li><li>Padrões promovem desacoplamento e permitem que algum aspecto da estrutura do sistema varie independentemente de outros aspectos</li><li>Evita redesign e readaptação de código nas situações previstas pelo padrão aplicado</li><li>Reduz risco e possíveis custos futuros</li><li>Na maior parte dos casos, o investimento não implica em altos custos (risco) no presente, já que contribuem para a legibilidade e qualidade do código.</li></ul><h2 id="oito-causas-comuns-de-redesign-e-padroes-que-os-evitam" tabindex="-1"><a class="header-anchor" href="#oito-causas-comuns-de-redesign-e-padroes-que-os-evitam"><span>Oito causas comuns de redesign e padrões que os evitam</span></a></h2><ol><li>Criação de objeto especifica classe explicitamente <ul><li>O sistema está preso a uma implementação específica</li><li>Solução: criar objetos indiretamente com Abstract Factory, Factory Method ou Prototype</li></ul></li><li>Dependência em operações específicas <ul><li>O sistema só tem uma forma de satisfazer uma requisição</li><li>Solução: evitar ações &quot;hard-coded&quot; com Chain of Responsibility ou Command</li></ul></li><li>Dependência em plataforma de H/W ou S/W <ul><li>O software precisa ser portado a outras plataformas</li><li>Solução: limitar dependências com Abstract Factory ou Bridge</li></ul></li><li>Dependência em representações ou implementações de objetos <ul><li>Clientes que sabem como um objeto é implementado, representado ou armazenado podem ter que ser alterados se o objeto mudar</li><li>Solução: isolar cliente com Abstract Factory, Bridge, Memento ou Proxy</li></ul></li><li>Dependências de algoritmo <ul><li>Mudanças de algoritmo são frequentes. Objetos que dependem de um algoritmo precisam mudar quando o algoritmo mudar.</li><li>Solução: isolá-los com Builder, Iterator, Strategy, Template Method ou Visitor</li></ul></li><li>Forte acoplamento <ul><li>Classes fortemente acopladas são difíceis de reusar, testar, manter, etc.</li><li>Solução: enfraquecer o acoplamento com Abstract Factory, Bridge, Chain of Responsibility, Command, Façade, Mediator ou Observer</li></ul></li><li>Extensão de funcionalidade através de subclasses <ul><li>Herança é difícil de usar; composição dificulta compreensão.</li><li>Solução: usar padrões que implementam bem herança e composição como Bridge, Chain of Responsibility, Composite, Decorator, Observer ou Strategy</li></ul></li><li>Incapacidade de alterar classes convenientemente <ul><li>Classes inaccessíveis, incompreensíveis ou difíceis de alterar</li><li>Solução: usar Adapter, Decorator ou Visitor</li></ul></li></ol><h2 id="tipos-de-software" tabindex="-1"><a class="header-anchor" href="#tipos-de-software"><span>Tipos de software</span></a></h2><ul><li>Aplicações <ul><li>Prioridades: reuso interno, manutenção, extensão</li></ul></li><li>Toolkits, APIs, bibliotecas <ul><li>Conjunto de classes reutilizáveis de propósito geral. Não impõem design</li><li>Prioridade: amplo reuso de código</li></ul></li><li>Frameworks <ul><li>Dita a arquitetura da aplicação. Requer que usuário aprenda o framework e inclua código e configuração.</li><li>Prioridade: amplo reuso de design</li><li>Geralmente são fortemente baseados em padrões. Quem conhecem os padrões entende o framework mais facilmente.</li></ul></li></ul><h2 id="atividades" tabindex="-1"><a class="header-anchor" href="#atividades"><span>Atividades</span></a></h2>',43),u={href:"https://classroom.github.com/a/g8pDGk1t",target:"_blank",rel:"noopener noreferrer"},m=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote3"},"[3]"),e("a",{class:"footnote-anchor",id:"footnote-ref3"})],-1),p={href:"https://classroom.github.com/a/Wj9pODK4",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"Escreva o código do programa que permita calcule o preço de cada ligação",-1),h={href:"https://classroom.github.com/a/rERqjmiP",target:"_blank",rel:"noopener noreferrer"},b=s('<h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Alexander, Christopher. A pattern language: towns, buildings, construction. Oxford university press, 1977. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>GUERRA, E. Design Patterns com Java : Projeto orientado a objetos guiado por padrões. [S.l.]: Casa do Código, 2013 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function g(v,j){const o=t("ExternalLinkIcon");return l(),n("div",null,[c,e("ol",null,[e("li",null,[a("Uma loja deseja ter a opção de aplicar descontos promocionais nos valores de seus produtos no momento da venda. Cada produto poderá ter seu preço alterado individualmente pelas promoções oferecidas pela loja. "),e("ul",null,[e("li",null,[a("Escreva o código do programa que permita calcule o preço do produto para ser vendido "),e("ul",null,[e("li",null,[e("a",u,[a("Entrega"),i(o)])])])])])]),e("li",null,[a("Considere o sistema de um estacionamento que precisa utilizar diversos critérios para calcular o valor que deve ser cobrado de seus clientes. Para um veículo de passeio, o valor deve ser calculado como R$2,00 por hora, porém, caso o tempo seja maior do que 12 horas, será cobrada uma taxa diária, e caso o número de dias for maior que 15 dias, será cobrada uma mensalidade. Existem também regras diferentes para caminhões, que dependem do número de eixos e do valor da carga carregada, e para veículos para muitos passageiros, como ônibus e vans."),m,e("ul",null,[e("li",null,[e("a",p,[a("Entrega"),i(o)])])])]),e("li",null,[a("Uma empresa de telefonia disponibiliza planos diferentes para seu clientes e o valor da tarifa depende do tipo da ligação, operadora de destino, pacote promocional e do horário da ligação "),e("ul",null,[f,e("li",null,[e("a",h,[a("Entrega"),i(o)])])])])]),b])}const P=r(d,[["render",g],["__file","04_PadroesProjetos.html.vue"]]),C=JSON.parse('{"path":"/posts/04_PadroesProjetos.html","title":"Padrões de Projeto de Software Orientado a Objetos","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-10T23:20:00.000Z","tag":["GOF"],"category":["aula"],"order":8,"gitInclude":["../../src/includes/bib.md"],"description":"Padrões de Projeto de Software Orientado a Objetos Introdução A idéia de padrões foi apresentada por Christopher Alexander em 1977 no contexto de Arquitetura (de prédios e cidad...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/04_PadroesProjetos.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Padrões de Projeto de Software Orientado a Objetos"}],["meta",{"property":"og:description","content":"Padrões de Projeto de Software Orientado a Objetos Introdução A idéia de padrões foi apresentada por Christopher Alexander em 1977 no contexto de Arquitetura (de prédios e cidad..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-05T04:49:51.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"GOF"}],["meta",{"property":"article:published_time","content":"2024-07-10T23:20:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-05T04:49:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Padrões de Projeto de Software Orientado a Objetos\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-10T23:20:00.000Z\\",\\"dateModified\\":\\"2024-07-05T04:49:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Introdução","slug":"introducao","link":"#introducao","children":[]},{"level":2,"title":"Conceito","slug":"conceito","link":"#conceito","children":[{"level":3,"title":"Outras definições","slug":"outras-definicoes","link":"#outras-definicoes","children":[]}]},{"level":2,"title":"Elementos de um padrão","slug":"elementos-de-um-padrao","link":"#elementos-de-um-padrao","children":[]},{"level":2,"title":"Visão geral dos Padrões do Gof","slug":"visao-geral-dos-padroes-do-gof","link":"#visao-geral-dos-padroes-do-gof","children":[{"level":3,"title":"Criação","slug":"criacao","link":"#criacao","children":[]},{"level":3,"title":"Estrutural","slug":"estrutural","link":"#estrutural","children":[]},{"level":3,"title":"Comportamental","slug":"comportamental","link":"#comportamental","children":[]}]},{"level":2,"title":"Como os padrões solucionam problemas?","slug":"como-os-padroes-solucionam-problemas","link":"#como-os-padroes-solucionam-problemas","children":[{"level":3,"title":"Quais os objetos mais apropriados?","slug":"quais-os-objetos-mais-apropriados","link":"#quais-os-objetos-mais-apropriados","children":[]},{"level":3,"title":"Qual a granularidade ideal?","slug":"qual-a-granularidade-ideal","link":"#qual-a-granularidade-ideal","children":[]},{"level":3,"title":"Como especificar interfaces?","slug":"como-especificar-interfaces","link":"#como-especificar-interfaces","children":[]},{"level":3,"title":"Como especificar implementações","slug":"como-especificar-implementacoes","link":"#como-especificar-implementacoes","children":[]},{"level":3,"title":"Como fazer o reuso funcionar","slug":"como-fazer-o-reuso-funcionar","link":"#como-fazer-o-reuso-funcionar","children":[]},{"level":3,"title":"Como distinguir estruturas estáticas (compile-time) e dinâmicas (run-time)?","slug":"como-distinguir-estruturas-estaticas-compile-time-e-dinamicas-run-time","link":"#como-distinguir-estruturas-estaticas-compile-time-e-dinamicas-run-time","children":[]},{"level":3,"title":"Como antecipar mudanças?","slug":"como-antecipar-mudancas","link":"#como-antecipar-mudancas","children":[]}]},{"level":2,"title":"Oito causas comuns de redesign e padrões que os evitam","slug":"oito-causas-comuns-de-redesign-e-padroes-que-os-evitam","link":"#oito-causas-comuns-de-redesign-e-padroes-que-os-evitam","children":[]},{"level":2,"title":"Tipos de software","slug":"tipos-de-software","link":"#tipos-de-software","children":[]},{"level":2,"title":"Atividades","slug":"atividades","link":"#atividades","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1720154991000,"updatedTime":1720154991000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":8.54,"words":2562},"filePathRelative":"posts/04_PadroesProjetos.md","localizedDate":"10 de julho de 2024","excerpt":"\\n<h2>Introdução</h2>\\n<p>A idéia de padrões foi apresentada por Christopher Alexander em 1977 no contexto de Arquitetura (de prédios e cidades):</p>\\n<ul>\\n<li>Problemas semelhantes com soluções diferentes</li>\\n<li>Reinventando a Roda</li>\\n</ul>\\n<h2>Conceito</h2>\\n<p>Também conhecidos como <em>Padrões de Desenho de Software OO</em> ou simplesmente como <em>Padrões</em>.</p>","autoDesc":true}');export{P as comp,C as data};
