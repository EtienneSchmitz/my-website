import { useIntl } from "react-intl"


export default function experiences() {
    const { formatMessage } = useIntl()
    const f = id => formatMessage({ id })
  

    return (
        <div>
            <h1>{f("hello")}</h1>
        </div>
    )
}