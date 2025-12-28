# Redux Toolkit and Context API Learning Project

A comprehensive Next.js project demonstrating both **Redux Toolkit** and **Context API** state management solutions side by side.

## 🎯 Features

- **Redux Toolkit Implementation**: Complete Redux setup with slices, store, and providers
- **Context API Implementation**: Multiple contexts (Counter, User, Theme) with custom hooks
- **Side-by-Side Comparison**: Easy navigation between Redux and Context examples
- **Multiple Contexts Example**: Demonstrates how to use multiple contexts together

## 📁 Project Structure

```
src/
├── store/                    # Redux Toolkit setup
│   ├── slices/
│   │   └── counterSlice.js   # Redux slice with actions and reducers
│   ├── store.js              # Redux store configuration
│   └── ReduxProvider.js      # Redux Provider wrapper
│
├── context/                  # Context API setup
│   ├── CounterContext.js     # Counter context and provider
│   ├── UserContext.js        # User authentication context
│   └── ThemeContext.js       # Theme management context
│
└── app/
    ├── page.js               # Redux Toolkit example page
    ├── context/
    │   └── page.js           # Single Context API example
    └── multiple-contexts/
        └── page.js           # Multiple contexts example
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Learning Resources

### Redux Toolkit
- Visit `/` to see Redux Toolkit implementation
- Uses `@reduxjs/toolkit` package
- Features: Slices, Store, Actions, Reducers
- DevTools support for debugging

### Context API
- Visit `/context` to see single context example
- Visit `/multiple-contexts` to see multiple contexts working together
- Built into React (no external dependencies)
- Custom hooks for easy access

## 🎓 Concepts Demonstrated

### Redux Toolkit
- Creating slices with `createSlice`
- Configuring store with `configureStore`
- Using `useSelector` and `useDispatch` hooks
- Action creators and reducers
- Immer integration for immutable updates

### Context API
- Creating contexts with `createContext`
- Building custom Provider components
- Creating custom hooks with `useContext`
- Managing state with `useState`
- Nesting multiple providers

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **Redux Toolkit** - State management
- **React Context API** - Built-in state management
- **Tailwind CSS** - Styling

## 📝 Notes

- Both Redux and Context API achieve the same goal but with different approaches
- Redux is better for large, complex applications
- Context API is simpler and built into React
- You can use both in the same project (as shown in this example)

## 🤝 Contributing

Feel free to fork this project and experiment with both state management solutions!

## 📄 License

This project is open source and available for learning purposes.
