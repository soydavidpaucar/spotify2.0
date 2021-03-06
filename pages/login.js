import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
	return (
		<div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
			<img className="w-40 mb-16" src="https://links.davidpaucar.me/znNqP" alt="Spotify" />
			
			{
				Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button className="p-3 bg-[#18D860] rounded-full text-white"
										onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Login with {provider.name}</button>
					</div>
				))
			}
		
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	
	const providers = await getProviders();
	
	return {
		props: {
			providers
		}
	};
	
}