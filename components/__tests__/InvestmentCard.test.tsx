// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('InvestmentCard', () => {
  it('displays the correct MXRF11 investment information', () => {
    const { getByText } = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    expect(getByText('MXRF11')).toBeTruthy();
    expect(getByText('Rendimento: R$ 0,09')).toBeTruthy();
    expect(getByText('R$ 11,52')).toBeTruthy();
    expect(getByText('DAQUI A 2 DIAS')).toBeTruthy();
    expect(getByText('Mais detalhes')).toBeTruthy();
  });

  it('displays the correct VISC11 investment information', () => {
    const { getByText } = render(
      <InvestmentCard code="VISC11" earnings="Rendimento: R$ 0,80" amount="R$ 10,40" date="DAQUI A 2 DIAS" />
    );

    expect(getByText('VISC11')).toBeTruthy();
    expect(getByText('Rendimento: R$ 0,80')).toBeTruthy();
    expect(getByText('R$ 10,40')).toBeTruthy();
    expect(getByText('DAQUI A 2 DIAS')).toBeTruthy();
    expect(getByText('Mais detalhes')).toBeTruthy();
  });

  it('displays alert', () => {
    //mocks
    const mockAlert = jest.fn()
    global.alert = mockAlert;


    const {getByText} = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    const botao_mais_detalhes = getByText("MXRF11")

    //presiona o botão
    fireEvent(getByText("Mais detalhes"), 'click')

    expect(Alert.alert).toHaveBeenCalled();
  });
});
