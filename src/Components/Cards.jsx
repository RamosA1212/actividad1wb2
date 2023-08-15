import React, { useEffect, useState } from 'react'

const Cards = (props) => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(props.count);
    }, [props.count]);



    return (
        <div>
            <div class="Container2">
                <h1> recomendacion de accion </h1>
                <div class="Containerhelp1">
                    <div class="card">
                        <img src="https://somoskudasai.com/wp-content/uploads/2021/07/Vol-25.jpg"></img>

                        <div class="card-header">
                            <h5>Vinland Saga Contador: {props.count} </h5>
                        </div>
                        <div class="card-body">
                            <p> Cuando Thors, un gran guerrero viking muere asesinado en batalla a manos de Askeladd, un
                                mercenario, su hijo, Thorfinn, jura vengarse. Para ello tendrá que demostrar su valía antes de
                                ganarse el derecho a retar a un duelo al asesino de su padre.</p>
                            <button>Detalle</button>

                        </div>

                    </div>
                    <div class="card">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe"></img>

                        <div class="card-header">
                            <h5>Chainsaw Man Contador: {props.count} </h5>
                        </div>
                        <div class="card-body">
                            <p>Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Para pagar la deuda
                                que le dejó su padre tras su muerte, ha tenido que ganarse el pan como puede matando demonios y
                                vendiendo sus cadáverse a la mafia, aunque su vida siempre ha sido miserable.

                                Cuando una traición provoca la muerte de Denji, Pochita hace un contrato con él y Denji revive
                                como "Chainsaw Man", un ser humano con el corazón de un demonio.</p>
                            <button>Detalle</button>

                        </div>

                    </div>
                    <div class="card">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/70975a1227b453c1caf24fa05a93617d.jpe"></img>
                        <div class="card-header">
                            <h5>Tokyo Revenge Contador: {props.count} </h5>
                        </div>
                        <div class="card-body">
                            <p>Takemichi Hanagaki es un trabajador que ha tocado fondo en la vida. Entonces descubre que la
                                única novia que tuvo jamás, en sus años de secundaria, la joven Hinata Tachibana, ha muerto a
                                manos de la pandilla Tokyo Manji. El día que descubre la noticia de su muerte, está en la
                                estación de tren cuando alguien lo empuja a las vías. Cierra los ojos pensando que está a punto
                                de morir, pero cuando los abre, sin saber cómo, ha retrocedido 12 años en el tiempo. Ahora podrá
                                revivir aquellos días que él consideraba los mejores de su vida y Takemichi intentará vengarse
                                de su vida.</p>
                            <button>Detalle</button>

                        </div>


                    </div>
                </div>
                <h2> recomendacion de fantasia</h2>
                <div class="Containerhelp1">
                    <div class="card">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/236f44583009506b8d9d012c4d3119a5.jpe"></img>
                        <div class="card-header">
                            <h5>One piece Contador: {props.count}</h5>
                        </div>
                        <div class="card-body">
                            <p>Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los
                                Piratas. Se lanza a sucar los mares y se convertirá en un capitán dispuesto a no darse por
                                vencido jamás hasta hacerse con el mayor tesoro de la historia: el legendario One Piece.</p>
                            <button>Detalle</button>

                        </div>

                    </div>
                    <div class="card">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f0dfabec20d9f3ce33add1a92d381c70.jpe"></img>
                        <div class="card-header">
                            <h5>My Hero Academia Contador: {props.count} </h5>
                        </div>
                        <div class="card-body">
                            <p>En un mundo en el que la mayor parte de la población nace con un Don, una habilidad
                                extraordinaria diferente en cada cual, no tardaron en aparecer tanto villanos como héroes
                                dispuestos a detenerlos. Con el tiempo los héroes pasaron a ser funcionarios del gobierno,
                                estando regulados y viviendo de su trabajo, además de convertirse en objeto de admiración de
                                muchos. Ahora, ser héroe es el sueño de la gran mayoría de niños, que esperan desde muy pequeños
                                a que su Don se manifieste para comenzar a entrenar y soñar con convertirse en los héroes número
                                uno.</p>
                            <button>Detalle</button>

                        </div>

                    </div>
                    <div class="card">
                        <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/514dc96ef8f7eaac948d6df35ecba0ba.jpe"></img>
                        <div class="card-header">
                            <h5>The Last Summoner Contador: {props.count} </h5>
                        </div>
                        <div class="card-body">
                            <p>El encuentro de un joven cocinero talentoso con una chica hambrienta que apareció en su cocina
                                cambia su vida ordinaria para siempre. Dora, un espíritu invocado y una diosa verdaderamente
                                linda, ahora lo llama amo. Sin embargo, él no está interesado en absoluto y está haciendo todo
                                lo posible para alejarse de la figura fantasmal. Como el destino lo tendría, cuando se convierte
                                en un invocador por accidente, no hay vuelta atrás en la vida.</p>
                            <button>Detalle</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
