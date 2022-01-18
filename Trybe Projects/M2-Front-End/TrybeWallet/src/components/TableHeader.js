import React from 'react';

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Valor gasto</th>
          <th>Moeda</th>
          <th>Convertido</th>
          <th>Câmbio utilizado</th>
          <th>Moeda de conversão</th>
          <th>Método de pagamento</th>
          <th>Tag</th>
          <th>Descrição</th>
          <th>Excluir</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
