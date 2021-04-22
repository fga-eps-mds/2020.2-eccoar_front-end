import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/Eccoar.png';
import InputBasic from '../../components/inputBasic';
import Button from '../../components/Button';
import arrow from '../../assets/arrow.svg';

const RegisterEmail = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();
	const { cpf, cep, adress, name, lastName } = history.location.state as {
		cpf: string;
		cep: string;
		adress: string;
		name: string;
		lastName: string;
	};

	const push = () => {
		if (!email || !password) {
			alert('Preencha todos os campos corretamente');
		} else {
			console.log(cpf, cep, adress, name, lastName, email, password);
			// FALTA INTEGRAR COM O BECK
			history.push('/home');
		}
	};

	return (
		<section className='containerRegister' data-testid='RegisterEmail'>
			<section className='containerRegister__arrowArea'>
				<img
					src={arrow}
					onClick={history.goBack}
					className='containerRegister__arrowArea-arrow'
				/>
			</section>
			<section className='containerRegister__componentsContainer'>
				<img src={logo} alt='' />
			</section>
			<section className='containerRegister__formsContainer'>
				<section className='containerRegister__formsContainer-section'>
					<section className='containerRegister__formsContainer-input'>
						<InputBasic
							label='E-MAIL:'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							testId='inputEmail'
						/>
					</section>
					<section className='containerRegister__formsContainer-input'>
						<InputBasic
							label='SENHA:'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							inputContentType='password'
							testId='inputPassword'
						/>
					</section>
				</section>
				<section className='containerRegister__buttonsContainer-buttonSize'>
					<Button
						text='CONTINUAR'
						onClick={() => push()}
						pattern='primary'
						icon='next'
					/>
				</section>
			</section>
		</section>
	);
};

export default RegisterEmail;