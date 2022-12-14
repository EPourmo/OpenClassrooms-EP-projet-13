import Background from "../components/Background";
import Account from "../components/Account";
import Welcome from "../components/Welcome";

export default function User() {
  // data from design
  const accountData = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  // create component using reusable component
  const accounts = accountData.map((item) => {
    return (
      <Account
        key={item.id}
        title={item.title}
        amount={item.amount}
        description={item.description}
      />
    );
  });
  return (
    <div className="userPage">
      <Background>
        <Welcome />
        <h2 className="sr-only">Accounts</h2>
        {accounts}
      </Background>
    </div>
  );
}
