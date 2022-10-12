import React from "react";
import Box from "@mui/material/Box";
import {Grid, Stack} from "@mui/material";
import {CarMediaImage} from "../atoms/CardMediaImage";
import Description from "../atoms/Description";
import {ButtonMl} from "../atoms/Button";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import StateBuy from "../atoms/StateBuy";

export const CardDescription = () => {
    return (
        <Box style={
            {
                margin:"2px 0"
            }
        }>
            <Grid style={{
                height: 154,
                width: 714,
                minWidth: 1024,
                background: '#FFFFFF',
                padding: '15px 10px'
            }}
                  container spacing={0}>
                <Grid xs={7}>
                    <Stack direction="row" spacing={6}>
                        <CarMediaImage alt="est es una probate"
                                       image="https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp"/>
                        <Grid>
                            <StateBuy value="Entregado"/>
                            <SubTitle
                                      value="LLego el 5 de Septiembre" style={{margin: "10px  0px"}}></SubTitle>
                            <Description value="Maquina Cabritas Popcorn 1200w 3 Minutos Palomitas De Maiz"/>
                            <Description value="1 u. | Color: Rojo"/>
                        </Grid>
                    </Stack>

                </Grid>
                <Grid xs={3}>
                    <Description value="Maria Felicinda Gonzalez Chureo"/>
                </Grid>
                <Grid xs={2}>
                    <ButtonMl value="Ver compra"/>
                </Grid>

            </Grid>
        </Box>
    )
}