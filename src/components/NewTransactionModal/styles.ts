import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    outline: 0;
    color: var(--text-title);
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    transition: box-shadow .2s;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      box-shadow: 0px 0px 0px 3px rgba(51, 204, 149, .4);
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    outline: 0;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    outline: 0;

    background: transparent;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all .2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
    
    &:focus {
      box-shadow: 0px 0px 0px 3px rgba(51, 204, 149, .4);
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  }
`;