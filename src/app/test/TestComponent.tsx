
import { accounts, mails } from "../pages/messages/data"
import { MailUi } from "../pages/messages/mail"

export default function TestComponent() {


  return (
    <div className="hidden flex-col md:flex">
      <MailUi
        accounts={accounts}
        mails={mails}
        defaultLayout={[10]}
        defaultCollapsed={false}
        navCollapsedSize={4}
      />
    </div>
  )
}