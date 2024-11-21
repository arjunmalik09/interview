import json
class Database:
    def __init__(self):
        pass

class InMemoryDatabase(Database):
    def __init__(self):
        self.json_data = {}
    def put(self, data):
        self.json_data = json.loads(data)
    def get(self):
        return self.json_data

class APIHandler:
    def __init__(self):
        self.database = InMemoryDatabase()
    def create_expense(self, request):
        transaction = request.transaction
        # {ExpenseType,
        # Amount
        # UsersJson [{user_id, share, percent, owes: True/False}]}
        json_data = self.database.get()
        json_data["transactions"] = json_data.get("transactions", []).append(transaction)
        # {
        #     users: [
        #     ],
        #     transactions: [
        #     ]
        # }
    def fetch_balance(self, user_id):
        balance = 0
        json_data = self.database.get()
        for transaction in json_data["transactions"]:
            expense_type = transaction.expense_type
            amount = transaction.amount
            users = transaction.users
            if any(user.user_id == user_id for user in users):
                fetch_for_user = [user.user_id in user_id for user in users]
                if expense_type == "EQUAL":
                    amount_add_or_sub = amount/users.length
                    if fetch_for_user.owes == True:
                        balance -= amount_add_or_sub
                    else:
                        balance += amount_add_or_sub
                # if expense_type == "PERCENT":
                #     pass
                # if expense_type == "EXACT":
                #     pass
        return balance

handler = APIHandler()
handler.create_expense({"expense_type": "EQUAL", "amount": 100, "users": [{"user_id":1, "owes":True}, {"user_id":5, "owes": False}]})
handler.create_expense({"expense_type": "EQUAL", "amount": 100, "users": [{"user_id":3, "owes":True}, {"user_id":4, "owes": False}]})
print("Balance of user 1", handler.fetch_balance(1))
# Fetch balance: user_id 1
# Expense1:
# expense_type: EQUAL
# amount: 100
# users_json:
# [{user_id:1, owes:True}, {user_id:5, owes: False}]
# 100/2
# 50
# Expense2:
# expense_type: EQUAL
# amount: 100
# users_json:
# [{user_id:3 , owes:True}, {user_id:4, owes: False}]
# 100/2
# 50