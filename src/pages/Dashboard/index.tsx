import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/9286063?s=460&u=0e8e2853765ecafc8f47ce285caf8e895b4db0f6&v=4"
            alt="arllain"
          />
          <div>
            <strong>teste teste teste</strong>
            <p>Easy easy easy easy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/9286063?s=460&u=0e8e2853765ecafc8f47ce285caf8e895b4db0f6&v=4"
            alt="arllain"
          />
          <div>
            <strong>teste teste teste</strong>
            <p>Easy easy easy easy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/9286063?s=460&u=0e8e2853765ecafc8f47ce285caf8e895b4db0f6&v=4"
            alt="arllain"
          />
          <div>
            <strong>teste teste teste</strong>
            <p>Easy easy easy easy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
