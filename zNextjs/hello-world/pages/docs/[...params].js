import { useRouter } from 'next/router';

export default function Docs() {
   const router = useRouter();
   const {params = []} = router.query;
   console.log(params);
   if(params.length == 1) return <h1>Documentation for feature {params[0]}</h1>;
   else if(params.length == 2) return <h1>Documentation for feature {params[0]} and its concept {params[1]}</h1>;
   return <h1>Something went wrong</h1>
}