interface DurationFormatOptions {
  style?: "long" | "short" | "narrow";
  secondsDisplay?: "always" | "auto";
}

interface Duration {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

declare namespace Intl {
  interface IntlDurationFormat {
    format(duration: Duration): string;
  }

  interface IntlDurationFormatConstructor {
    new (
      locales?: string | string[],
      options?: DurationFormatOptions
    ): IntlDurationFormat;
    format(duration: Duration): string;
  }

  /**
   * Simple type definitions for [Intl.DurationFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat).
   * Issue: https://github.com/microsoft/TypeScript/issues/60608
   */
  const DurationFormat: IntlDurationFormatConstructor | undefined;
}
