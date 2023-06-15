# Exercício 1 - Google:

⚠️ Faça a análise de complexidade da sua solução.

**Bônus**: É muito comum em entrevistas que, quando a pessoa resolve o problema dentro do tempo, façam-se perguntas "follow-up", que dificultam a questão. Os follow-ups abaixo são opcionais.

Exemplo:

```python
- 1 => 2, 3

- 2 => 4

- 3 => sem subordinados

- 4 => 5, 6

- 5 => 7

- 6 => sem subordinados

- 7 => sem subordinados
```

Follow-ups:

- Caso a empresa precise fazer essa consulta frequentemente, como você pode tornar essas consultas mais eficientes? Como você pode guardar o resultado de consultas anteriores?

- Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa. Seu método deve considerar que cada pessoa pode ter no máximo k pessoas em seu time. Se o time estiver cheio, a nova contratada pode ser alocada na equipe de qualquer pessoa abaixo dela, não precisando ser na equipe imediatamente abaixo.

- Se você adicionar uma nova contratação à lista de subordinadas, a estrutura que você fez no follow-up 1 está desatualizada. Modifique suas funções para que essa estrutura seja atualizada junto com a adição de uma nova contratação. Faça isso sem rodar de novo a função score() e lembre-se de atualizar todos os scores desde a pessoa da presidência até a equipe que a nova contratação entrou.

