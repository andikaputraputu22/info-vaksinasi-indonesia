import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.background_color};
        color: ${({theme}) => theme.color};
        transition: all .2s linear;
    }

    hr {
        border-top-color: ${({theme}) => theme.line_color};
    }

    .card {
        background-color: ${({theme}) => theme.card_color};
    }

    .custom-progress {
        background-color: ${({theme}) => theme.bg_progress};
    }

    .bg-custom-color-progress {
        background-color: ${({theme}) => theme.progress_color};
    }

    .custom-amount {
        color: ${({theme}) => theme.amount_color};
    }

    .custom-total {
        color: ${({theme}) => theme.total_color};
    }

    .custom-control-input:checked ~ .custom-control-label::before {
        border-color: ${({theme}) => theme.switch_color};
        background-color: ${({theme}) => theme.switch_color};
    }
`;

export const lightTheme = {
    background_color: '#f8f9fb',
    color: 'rgb(76, 86, 106)',
    line_color: 'rgba(0,0,0,.1)',
    card_color: '#d8dee9',
    bg_progress: '#eceff4',
    progress_color: '#88c0d0',
    amount_color: 'darkcyan',
    total_color: 'darkcyan',
    switch_color: '#5e81ac'
};

export const darkTheme = {
    background_color: '#2e3440',
    color: 'rgb(236, 239, 244)',
    line_color: 'rgba(216, 222, 233, 0.5)',
    card_color: '#3b4252',
    bg_progress: '#434c5e',
    progress_color: '#81a1c1',
    amount_color: 'aqua',
    total_color: 'aqua',
    switch_color: '#5e81ac'
};