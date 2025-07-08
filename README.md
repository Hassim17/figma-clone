# 🖌️ figma-clone

**A simplified Figma-style collaborative design tool built with Next.js, Liveblocks, and Fabric.js.**  
Supports real-time multiplayer editing, cursor presence, comment threads, and basic shape drawing — built purely for learning and experimentation.

---

## ✨ Features

- 🟦 Create and manipulate canvas objects (shapes, elements).
- 🎛️ View and edit properties of selected canvas items.
- 👥 Real-time multiplayer collaboration across users.
- 💬 Add comments, emojis, and mention other users.
- ⚡ Instant updates for all actions across sessions using Liveblocks.
- 📚 Layer listing and management (like Figma).
- 😄 Express reactions (e.g., emojis, presence indicators) across users.
- 🧩 Built to mimic Figma's core interaction mechanics.

---

## 🛠️ Tech Stack

| Layer        | Technology Used                           |
|--------------|--------------------------------------------|
| Frontend     | [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Canvas Engine| [Fabric.js](http://fabricjs.com/)          |
| Realtime Sync| [Liveblocks](https://liveblocks.io/)       |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/figma-clone.git
cd figma-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file at the root of your project:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_public_liveblocks_key_here
```

> 🔑 Replace the placeholder with your actual [Liveblocks](https://liveblocks.io/) public key.

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to \`http://localhost:3000\`.

---

## 🧪 Testing

There are no automated tests included in this project as it's built for experimentation. You can explore real-time features by opening the app in multiple tabs or different devices.

---

## 🔐 Authentication & Authorization

This project does not include user authentication. Realtime collaboration is managed entirely via Liveblocks' presence and storage APIs.

---

## 📡 API Reference

No REST or GraphQL APIs are used.  
All state synchronization, storage, presence, and events are managed via **Liveblocks**.

> For more details, refer to [Liveblocks Documentation](https://liveblocks.io/docs).

---

## 🎯 Use Cases

- 💡 Learning how real-time collaborative apps like Figma work.
- 🧪 Experimenting with Liveblocks and canvas-based UI.
- 🎨 Building your own design tool prototype.
- 👨‍💻 Understanding shared state and presence synchronization in a team-based environment.

---

## 🚧 Future Improvements (Optional)

- Add user authentication (e.g., Auth.js or Firebase).
- Export/import canvas files.
- Support image uploads or more complex shapes.
- Add keyboard shortcuts for quick design actions.
- Enhance comment threading and notification system.

---

## 👨‍💻 Author & Credits

Built by **Mohammed Hassim**  
