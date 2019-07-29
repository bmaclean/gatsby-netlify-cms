import React, {useState} from 'react';

const PasswordPage = ({onSuccess}) => {
	const [password, setPassword] = useState('');

	const submit = () => {
		if (password === 'password') {
			onSuccess();
		} else {
			alert('Please enter the correct password!');
		}
	};

	return (
		<div
			css={{
				display: 'flex',
				alignItems: 'center',
				height: '100vh',
				width: '100vw',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<label css={{marginBottom: '8px'}}>
				Website Password (hint: it&apos;s definitely not &quot;password&quot;)
			</label>
			<input
				css={{marginBottom: '16px'}}
				type="password"
				onChange={e => setPassword(e.target.value)}
				value={password}
			></input>
			<button onClick={submit}>SUBMIT</button>
		</div>
	);
};

export default PasswordPage;
