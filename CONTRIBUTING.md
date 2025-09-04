# Contribuindo para Minha Pokédex

Obrigado por considerar contribuir para este projeto! Este documento contém diretrizes para ajudar você a contribuir de forma efetiva.

## 🚀 Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub e depois clone
git clone https://github.com/SEU-USERNAME/my-pokedex.git
cd my-pokedex
```

### 2. Configuração do Ambiente

```bash
# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### 3. Criando uma Branch

```bash
# Crie uma branch para sua feature/correção
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

## 📝 Padrões de Código

### Estrutura de Arquivos

- **Componentes**: PascalCase (`PokemonCard.jsx`)
- **Hooks**: camelCase iniciando com 'use' (`usePokemon.js`)
- **Utilitários**: camelCase (`pokemonUtils.js`)
- **Estilos**: kebab-case quando necessário

### Convenções de Nomenclatura

- **Variáveis e funções**: camelCase
- **Constantes**: UPPER_CASE
- **Componentes**: PascalCase
- **Arquivos**: PascalCase para componentes, camelCase para outros

### Boas Práticas

- Use hooks customizados para lógica reutilizável
- Mantenha componentes pequenos e focados
- Adicione PropTypes ou TypeScript quando possível
- Escreva comentários para lógica complexa
- Use nomes descritivos para variáveis e funções

## 🧪 Testes

```bash
# Execute os testes (quando implementados)
npm run test

# Execute o linting
npm run lint
```

## 📦 Commit Guidelines

### Formato das Mensagens

```
tipo(escopo): descrição breve

Descrição mais detalhada se necessário

Fixes #123
```

### Tipos de Commit

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alterações na documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Manutenção, configuração, etc

### Exemplos

```bash
git commit -m "feat(carousel): adicionar navegação por teclado"
git commit -m "fix(navigation): corrigir bug na paginação"
git commit -m "docs(readme): atualizar instruções de instalação"
```

## 🐛 Reportando Bugs

### Antes de Reportar

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/wellytonmarcos/my-pokedex/issues)
2. Teste na versão mais recente
3. Reproduza o bug de forma consistente

### Template de Bug Report

```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Para Reproduzir**
Passos para reproduzir o comportamento:

1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
Descrição clara do que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots para explicar o problema.

**Ambiente:**

- OS: [ex: iOS]
- Browser: [ex: chrome, safari]
- Versão: [ex: 22]
```

## ✨ Sugerindo Funcionalidades

### Template de Feature Request

```markdown
**A sua solicitação de feature está relacionada a um problema?**
Descrição clara e concisa do problema.

**Descreva a solução que você gostaria**
Descrição clara e concisa do que você quer que aconteça.

**Descreva alternativas consideradas**
Descrição clara e concisa de soluções alternativas.

**Contexto adicional**
Adicione qualquer outro contexto ou screenshots sobre a feature request.
```

## 🔄 Pull Request Process

### Antes de Submeter

1. Certifique-se de que o código está funcionando
2. Execute `npm run lint` e corrija erros
3. Execute testes se disponíveis
4. Atualize documentação se necessário
5. Adicione screenshots para mudanças visuais

### Template de Pull Request

```markdown
## Descrição

Breve descrição das mudanças.

## Tipo de mudança

- [ ] Bug fix (mudança que corrige um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (fix ou feature que quebraria funcionalidade existente)
- [ ] Mudança de documentação

## Como foi testado?

Descreva os testes que você executou.

## Screenshots (se aplicável)

Adicione screenshots para mudanças na UI.

## Checklist:

- [ ] Meu código segue o guia de estilo do projeto
- [ ] Revisei meu próprio código
- [ ] Comentei meu código em partes complexas
- [ ] Fiz mudanças correspondentes na documentação
- [ ] Minhas mudanças não geram novos warnings
- [ ] Executei testes locais que passaram
```

## 💬 Dúvidas?

Se você tem alguma dúvida sobre como contribuir:

- Abra uma [Issue](https://github.com/wellytonmarcos/my-pokedex/issues) com a tag `question`
- Entre em contato com [@wellytonmarcos](https://github.com/wellytonmarcos)

## 🎉 Reconhecimento

Todos os contribuidores serão listados no README e receberão nosso reconhecimento!

Obrigado por contribuir! 🚀
