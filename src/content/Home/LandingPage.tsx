import { Section } from "@components/Container/Section";
import { BoxProps } from "@mui/material/Box";
import { Text } from "@components/Text/TextComponent";
import { ButtonLink } from "@components/Buttons/LinkButton";
import { ButtonConfig } from "./HomeButtons";

// Could use react type animation for the crypto wod
export function LandingText(){
    return (
        <div className={"flex flex-col text-center items-center gap-y-4"}>
            <Text.H1>
                All your crypto
            </Text.H1>
            <Text.H1>
                payments in one place
            </Text.H1>

            <div className={"w-[650px]"}>
                <Text.Body1>
                From fiat to crypto — wire, card & ACH to support for every major chain — tracking your subscriptions, invoices, and payment links has never been easier.
                </Text.Body1>
            </div>
        </div>
    );
}
export function LandingPage({...props}: BoxProps){
    return (
        <Section {...props}>
            <div className={"flex flex-col items-center gap-y-6"}>
                <div>
                    <ButtonLink {...ButtonConfig.access}/>
                </div>
                <LandingText/>

                <div className={"flex gap-x-6"}>
                    <ButtonLink {...ButtonConfig.app}/>
                    <ButtonLink {...ButtonConfig.docs}/>
                </div>
            </div>
        </Section>
    );
}