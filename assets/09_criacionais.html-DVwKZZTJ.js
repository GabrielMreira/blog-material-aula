import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as c,c as d,b as o,d as e,e as t,w as s,a as r}from"./app-DVmwulZ9.js";const l={},p=r('<h1 id="padroes-de-projeto-criacionais" tabindex="-1"><a class="header-anchor" href="#padroes-de-projeto-criacionais"><span>Padrões de projeto criacionais</span></a></h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.</p><p>Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto que um um padrão de criação de objeto delegará a instanciação para outro objeto.</p><p>Os padrões de criação se tornam importantes à medida que os sistemas evoluem no sentido de depender mais da composição de objetos do que da herança de classes.</p><p>Quando isso acontece, a ênfase se desloca da codificação rígida de um conjunto fixo de comportamentos para a definição de um conjunto menor de comportamentos fundamentais, os quais podem ser compostos em qualquer número para definir comportamentos mais complexos. Assim, criar objetos com comportamentos particulares exige mais do que simplesmente instanciar uma classe.</p><p>Há dois temas recorrentes nesses padrões. Primeiro, todos encapsulam conhecimento sobre quais classes concretas são usadas pelo sistema. Segundo, ocultam o modo como as instâncias destas classes são criadas e compostas. Tudo o que o sistema sabe no geral sobre os objetos é que suas classes são definidas por classes abstratas.</p><p>Consequentemente, os padrões de criação dão muita flexibilidade ao que, como e quando é criado e a quem cria. Eles permitem configurar um sistema com “objetos-produto” que variam amplamente em estrutura e funcionalidade. A configuração pode ser estática (isto é, especificada em tempo de compilação) ou dinâmica (em tempo de execução).</p>',8),m=r('<h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>GAMMA, Erich. et al. Padrões de projetos: Soluções reutilizáveis de software orientados a objetos Bookman editora, 2009. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function u(f,h){const a=n("RouteLink");return c(),d("div",null,[p,o("p",null,[e("Algumas vezes, os padrões de criação competem entre si. Por exemplo, há casos em que tanto "),t(a,{to:"/posts/GOF/Prototype.html"},{default:s(()=>[e("Prototype")]),_:1}),e(" como "),t(a,{to:"/posts/GOF/Abstract_Factory.html"},{default:s(()=>[e("Abstract Factory")]),_:1}),e(" podem ser usados proveitosamente. Em outras ocasiões, eles são complementares: "),t(a,{to:"/posts/GOF/Builder.html"},{default:s(()=>[e("Builder")]),_:1}),e(" pode usar um dos outros padrões para implementar quais componentes são construídos. "),t(a,{to:"/posts/GOF/Prototype.html"},{default:s(()=>[e("Prototype")]),_:1}),e(" pode usar "),t(a,{to:"/posts/GOF/Singleton.html"},{default:s(()=>[e("Singleton")]),_:1}),e(" na sua implementação.")]),o("ul",null,[o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Factory_Method.html"},{default:s(()=>[e("Factory Method")]),_:1})]),e(" Encapsular a escolha da classe concreta a ser utilizada na criação de objetos de um determinado tipo.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Abstract_Factory.html"},{default:s(()=>[e("Abstract Factory")]),_:1})]),e(" Encapsular a escolha das classes concretas a serem utilizadas na criação dos objetos de diversas famílias.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Builder.html"},{default:s(()=>[e("Builder")]),_:1})]),e(" Separar o processo de construção de um objeto de sua representação e permitir a sua criação passo-a-passo. Diferentes tipos de objetos podem ser criados com implementações distintas de cada passo.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Prototype.html"},{default:s(()=>[e("Prototype")]),_:1})]),e(" Possibilitar a criação de novos objetos a partir da cópia de objetos existentes.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Singleton.html"},{default:s(()=>[e("Singleton")]),_:1})]),e(" Permitir a criação de uma única instância de uma classe e fornecer um modo para recuperá-la.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Multiton.html"},{default:s(()=>[e("Multiton")]),_:1})]),e(" Permitir a criação de uma quantidade limitada de instâncias de determinada classe e fornecer um modo para recuperá-las.")]),o("li",null,[o("strong",null,[t(a,{to:"/posts/GOF/Object_Pool.html"},{default:s(()=>[e("Object Pool")]),_:1})]),e(" Possibilitar o reaproveitamento de objetos")])]),m])}const g=i(l,[["render",u],["__file","09_criacionais.html.vue"]]),j=JSON.parse('{"path":"/posts/GOF/09_criacionais.html","title":"Padrões de projeto criacionais","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-10T23:20:00.000Z","tag":["GOF"],"category":["aula"],"order":9,"gitInclude":["../../../src/includes/bib.md"],"description":"Padrões de projeto criacionais [1] Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, comp...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/GOF/09_criacionais.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Padrões de projeto criacionais"}],["meta",{"property":"og:description","content":"Padrões de projeto criacionais [1] Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, comp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-18T22:17:48.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"GOF"}],["meta",{"property":"article:published_time","content":"2024-07-10T23:20:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T22:17:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Padrões de projeto criacionais\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-10T23:20:00.000Z\\",\\"dateModified\\":\\"2024-07-18T22:17:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1721341068000,"updatedTime":1721341068000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":1.53,"words":458},"filePathRelative":"posts/GOF/09_criacionais.md","localizedDate":"10 de julho de 2024","autoDesc":true}');export{g as comp,j as data};