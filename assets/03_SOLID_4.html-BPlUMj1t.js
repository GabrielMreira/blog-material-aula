import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c,b as e,e as a,d as s,a as p}from"./app-DWfdCya7.js";const d={},r=p(`<h1 id="principio-da-segregacao-de-interface-isp" tabindex="-1"><a class="header-anchor" href="#principio-da-segregacao-de-interface-isp"><span>Princípio da Segregação de Interface (ISP)</span></a></h1><p>Adaptado de <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><h2 id="principios-solid-principio-da-responsabilidade-unica-srp" tabindex="-1"><a class="header-anchor" href="#principios-solid-principio-da-responsabilidade-unica-srp"><span>Princípios SOLID - Princípio da Responsabilidade Única (SRP)</span></a></h2><p>Adaptado de <sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup>.</p><p>SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.</p><p>Michael Feathers criou esse acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD</p><p>S.O.L.I.D: Os 5 princípios da POO</p><ol><li>S — Single Responsiblity Principle (Princípio da responsabilidade única)</li><li>O — Open-Closed Principle (Princípio Aberto-Fechado)</li><li>L — Liskov Substitution Principle (Princípio da substituição de Liskov)</li><li>I — Interface Segregation Principle (Princípio da Segregação da Interface)</li><li>D — Dependency Inversion Principle (Princípio da inversão da dependência)</li></ol><p>Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.</p><h2 id="principio-da-segregacao-de-interface-isp-1" tabindex="-1"><a class="header-anchor" href="#principio-da-segregacao-de-interface-isp-1"><span>Princípio da Segregação de Interface (ISP)</span></a></h2><p><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><h3 id="o-que-e-uma-interface" tabindex="-1"><a class="header-anchor" href="#o-que-e-uma-interface"><span>O que é uma interface?</span></a></h3><p>Uma interface define um contrato que uma classe deve seguir, especificando quais métodos ela deve implementar. Quando <code>Cliente</code> deseja interagir com <code>ServicoA</code>, v se comunicará por meio da interface <code>Servico</code>, para a qual <code>ServicoA</code> e <code>Cliente</code> se entendem mutuamente.</p><figure><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKhEIImkLd3EoKpDAqc5ye9JYyeoa_CT5J9p2t9ISu4oS345BYweMWKzX9X3QbuAq300" alt="uml diagram" loading="lazy"><figcaption>Uso de interface pela classe Cliente</figcaption></figure><p>Interfaces são úteis para polimorfismo. o objeto <code>Cliente</code> apenas entende ou sabe sobre a interface <code>Servico</code>, o que significa que ele não sabe que o objeto <code>ServicoA</code> existe. Isso significa que pode ocorrer polimorfismo - ou seja, o objeto <code>Servico</code> pode ser substituído por muitas implementações diferentes, sem afetar o objeto <code>Cliente</code></p><h3 id="definicao" tabindex="-1"><a class="header-anchor" href="#definicao"><span>Definição</span></a></h3><p>O Princípio da Segregação de Interface trata da coesão de interfaces e diz que</p><div class="hint-container tip"><p class="hint-container-title">Definição</p><p>Clientes não devem ser forçados a depender de métodos que não usam.</p></div><p>Este princípio afirma que os clientes não devem ser forçados a depender das interfaces que eles não usam. Quando temos interfaces não coesas, o ISP nos orienta a criar múltiplas interfaces menores e coesas.</p><div class="hint-container warning"><p class="hint-container-title">Avisos</p><p>Coesão é o nível de integralidade interna de uma classe e mede o grau em que uma classe ou seus métodos fazem sentido, ou seja, quão claro é o entendimento do que a classe ou método possui. Uma alta coesão indica responsabilidades bem definidas.</p></div><p>Quando você aplica o ISP, a classe e suas dependências se comunicam usando interfaces fortemente focadas, minimizando as dependências de membros não utilizados e reduzindo o acoplamento de acordo.</p><p>Interfaces menores são mais fáceis de implementar, melhorando a flexibilidade e a possibilidade de reutilização. Como menos classes compartilham interfaces, o número de alterações necessárias em resposta a uma modificação da interface é reduzido, e, isso aumenta a robustez.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Pedido</span><span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">processarCartaoCredito</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PedidoOnline</span> <span class="token keyword">implements</span> <span class="token class-name">Pedido</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//código da compra</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processarCartaoCredito</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//processo do cartão</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PedidoPresencial</span> <span class="token keyword">implements</span> <span class="token class-name">Pedido</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//código da compra</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processarCartaoCredito</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//Não precisa para boleto</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Neste código temos a interface <code>Pedido</code> sendo implementada pelas classes <code>PedidoOnline</code> e <code>PedidoPresencial</code>.</p><p>Aparentemente tudo esta correto e o código vai funcionar.</p><p>Mas este código esta violando o princípio ISP pois a interface <code>Pedido</code> esta sendo implementada pela classe <code>PedidoPresencial</code> mas esta classe não esta implementando o método <code>processarCartaoCredito</code>.</p><p>Assim a classe esta sendo forçada a depender do método <code>processarCartaoCredito</code> que ela não precisa usar.</p><p>Para adequar o código ao princípio ISP podemos fazer assim:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Pedido</span><span class="token punctuation">{</span> 
        <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PagamentoCartao</span><span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">processarCartaoCredito</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PedidoOnline</span> <span class="token keyword">implements</span> <span class="token class-name">Pedido</span><span class="token punctuation">,</span> <span class="token class-name">PagamentoCartao</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//código da compra</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processarCartaoCredito</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//processo do cartão</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PedidoPresencial</span> <span class="token keyword">implements</span> <span class="token class-name">Pedido</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compra</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//código da compra</span>
        <span class="token punctuation">}</span>        
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Agora temos interfaces específicas <code>Pedido</code> e <code>PagamentoCartao</code>, e, nenhuma classe esta sendo obrigada a implementa um método que não utiliza.</p><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep">`,32),l={class:"footnotes"},u={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},k={href:"https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530",target:"_blank",rel:"noopener noreferrer"},f=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),v=e("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1),b={id:"footnote2",class:"footnote-item"},g={href:"https://jackhiston.com/2017/8/3/the-interface-segregation-principle/",target:"_blank",rel:"noopener noreferrer"},h=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),P={id:"footnote3",class:"footnote-item"},S={href:"https://www.macoratti.net/20/05/c_isp1.htm",target:"_blank",rel:"noopener noreferrer"},_=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function y(I,w){const n=i("ExternalLinkIcon");return t(),c("div",null,[r,e("section",l,[e("ol",u,[e("li",m,[e("p",null,[a("João Roberto da Paixão.O que é SOLID: O guia completo para você entender os 5 princípios da POO."),e("a",k,[a("https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530"),s(n)]),a(" (Acessado em 18/03/2022) "),f,a(),v])]),e("li",b,[e("p",null,[a("The Interface Segregation Principle. "),e("a",g,[a("https://jackhiston.com/2017/8/3/the-interface-segregation-principle/"),s(n)]),a(),h])]),e("li",P,[e("p",null,[a("Princípio Da Segregação da Interface(ISP). "),e("a",S,[a("https://www.macoratti.net/20/05/c_isp1.htm"),s(n)]),a(),_])])])])])}const q=o(d,[["render",y],["__file","03_SOLID_4.html.vue"]]),D=JSON.parse('{"path":"/posts/SOLID/03_SOLID_4.html","title":"Princípio da Segregação de Interface (ISP)","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-03-28T00:40:00.000Z","tag":["solid"],"category":["aula"],"order":6,"gitInclude":["../../../src/includes/SOLID.md","../../../src/includes/bib.md"],"description":"Princípio da Segregação de Interface (ISP) Adaptado de [1]. Princípios SOLID - Princípio da Responsabilidade Única (SRP) Adaptado de [1:1]. SOLID são cinco princípios da program...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/SOLID/03_SOLID_4.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Princípio da Segregação de Interface (ISP)"}],["meta",{"property":"og:description","content":"Princípio da Segregação de Interface (ISP) Adaptado de [1]. Princípios SOLID - Princípio da Responsabilidade Única (SRP) Adaptado de [1:1]. SOLID são cinco princípios da program..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-18T12:45:02.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"solid"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:40:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T12:45:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Princípio da Segregação de Interface (ISP)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:40:00.000Z\\",\\"dateModified\\":\\"2024-07-18T12:45:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Princípios SOLID - Princípio da Responsabilidade Única (SRP)","slug":"principios-solid-principio-da-responsabilidade-unica-srp","link":"#principios-solid-principio-da-responsabilidade-unica-srp","children":[]},{"level":2,"title":"Princípio da Segregação de Interface (ISP)","slug":"principio-da-segregacao-de-interface-isp-1","link":"#principio-da-segregacao-de-interface-isp-1","children":[{"level":3,"title":"O que é uma interface?","slug":"o-que-e-uma-interface","link":"#o-que-e-uma-interface","children":[]},{"level":3,"title":"Definição","slug":"definicao","link":"#definicao","children":[]}]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1721306702000,"updatedTime":1721306702000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"posts/SOLID/03_SOLID_4.md","localizedDate":"28 de março de 2024","autoDesc":true}');export{q as comp,D as data};