import {
  PlayerLoggedOutGuard,
  PlayerLoginForm,
} from "@/domains/player/widgets";

export default function LoginPage() {
  return (
    <PlayerLoggedOutGuard>
      <PlayerLoginForm />
    </PlayerLoggedOutGuard>
  );
}
