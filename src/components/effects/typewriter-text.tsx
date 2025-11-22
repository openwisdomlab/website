'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  className,
  speed = 50,
  delay = 0,
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = React.useState('');

  React.useEffect(() => {
    setDisplayText('');

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
    </span>
  );
}

// Multi-line Typewriter
interface MultiLineTypewriterProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  speed?: number;
  lineDelay?: number;
}

export function MultiLineTypewriter({
  lines,
  className,
  lineClassName,
  speed = 50,
  lineDelay = 500,
}: MultiLineTypewriterProps) {
  const [currentLine, setCurrentLine] = React.useState(0);
  const [completedLines, setCompletedLines] = React.useState<string[]>([]);

  const handleLineComplete = () => {
    setCompletedLines((prev) => [...prev, lines[currentLine] ?? '']);
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={cn('font-mono space-y-1', className)}>
      {completedLines.map((line, index) => (
        <div key={index} className={lineClassName}>
          {line}
        </div>
      ))}
      {currentLine < lines.length && (
        <TypewriterText
          text={lines[currentLine] ?? ''}
          className={lineClassName}
          speed={speed}
          onComplete={handleLineComplete}
        />
      )}
    </div>
  );
}

// Terminal-style Typewriter
interface TerminalTypewriterProps {
  commands: Array<{
    prompt?: string;
    command: string;
    output?: string;
  }>;
  className?: string;
}

export function TerminalTypewriter({
  commands,
  className,
}: TerminalTypewriterProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = React.useState(0);
  const [showOutput, setShowOutput] = React.useState(false);
  const [completedCommands, setCompletedCommands] = React.useState<number[]>([]);

  const currentCommand = commands[currentCommandIndex];

  const handleCommandComplete = () => {
    if (currentCommand?.output) {
      setShowOutput(true);
      setTimeout(() => {
        setCompletedCommands((prev) => [...prev, currentCommandIndex]);
        setShowOutput(false);
        if (currentCommandIndex < commands.length - 1) {
          setCurrentCommandIndex((prev) => prev + 1);
        }
      }, 1000);
    } else {
      setCompletedCommands((prev) => [...prev, currentCommandIndex]);
      if (currentCommandIndex < commands.length - 1) {
        setCurrentCommandIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div
      className={cn(
        'bg-dark-surface rounded-lg p-4 font-mono text-sm',
        className
      )}
    >
      {/* Completed commands */}
      {completedCommands.map((index) => {
        const cmd = commands[index];
        return (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-neon-green">{cmd?.prompt ?? '$'}</span>
              <span className="text-gray-300">{cmd?.command}</span>
            </div>
            {cmd?.output && (
              <div className="text-gray-500 ml-4 mt-1">{cmd.output}</div>
            )}
          </div>
        );
      })}

      {/* Current command */}
      {currentCommandIndex < commands.length && !completedCommands.includes(currentCommandIndex) && (
        <div className="flex items-center gap-2">
          <span className="text-neon-green">{currentCommand?.prompt ?? '$'}</span>
          <TypewriterText
            text={currentCommand?.command ?? ''}
            className="text-gray-300"
            onComplete={handleCommandComplete}
          />
          {!showOutput && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-neon-purple"
            >
              |
            </motion.span>
          )}
        </div>
      )}

      {/* Output */}
      {showOutput && currentCommand?.output && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 ml-4 mt-1"
        >
          {currentCommand.output}
        </motion.div>
      )}
    </div>
  );
}
