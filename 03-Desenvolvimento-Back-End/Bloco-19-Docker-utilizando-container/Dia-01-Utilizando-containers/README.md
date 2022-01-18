<h2>Agora a prática</h2>
<h3>Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!</h3>
<ol>
<li>No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;</li>
<li>Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;</li>
<li>Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;</li>
<li>Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;</li>
<li>No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;</li>
<li>Encerre o terminal ;</li>
<li>Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;</li>
<li>Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;</li>
<li>Retome o container que foi criado anteriormente nesse exercício ;</li>
<li>Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;</li>
<li>Encerre o terminal ;</li>
<li>Remova somente o container criado para esse exercício ;</li>
<li>(Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;</li>
<li>(Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].</li>
</ol>