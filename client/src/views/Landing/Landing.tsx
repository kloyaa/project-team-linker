import React from 'react';
import { useTypedSelector } from '../../hooks/hooks';
import { Redirect } from 'react-router-dom'
type ILanding = {
    
}
 
const Landing: React.FC<ILanding> = () => {
    const authentication = useTypedSelector(state => state.authentication);
    const { isAuthenticated } = authentication;



    if(!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return ( 
        <div className="container">
            <p>Landing page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero odio et nulla eaque necessitatibus illo reiciendis illum quibusdam voluptas, dolor laudantium quas culpa! Animi nesciunt asperiores culpa sequi sit cumque, alias ex doloribus laborum dolore eius quaerat explicabo labore porro tempore ea sint eaque, corporis soluta earum? Porro amet quas ipsa accusamus nulla debitis eaque. Numquam, voluptatibus dolorem reprehenderit mollitia consectetur, similique exercitationem inventore, animi minus et pariatur a. Temporibus, similique ducimus cum veritatis quibusdam a mollitia minima aspernatur error, quidem beatae doloribus ad eveniet nihil dolorum id facilis, non saepe in dignissimos sequi voluptatibus placeat qui. Debitis blanditiis, quos odio praesentium minima incidunt. Maxime, corporis adipisci rem, assumenda sint perferendis autem voluptatibus enim nostrum consequatur excepturi minus porro? Corrupti cum aperiam ipsa! Tempora facere corporis, at aspernatur in iusto est vel quidem maiores nobis, ducimus aut molestiae fugiat nihil. Nobis, facere modi alias ut tempora possimus ducimus autem neque molestias, rem dolores obcaecati asperiores non blanditiis veniam commodi eos iste quasi, odio numquam nesciunt ea necessitatibus porro. Accusamus deserunt fugiat assumenda ipsa quasi laborum. Deserunt voluptatibus sed corporis tempore nihil harum quae adipisci, id, omnis magni nesciunt exercitationem totam nisi eaque unde sunt porro ratione quibusdam corrupti explicabo? Numquam.</p>
        </div>
     );
}
 
export default Landing;