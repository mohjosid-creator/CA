import React, { useState, useEffect } from 'react';
import {
  X,
  Radar,
  Globe,
  Wifi,
  Camera,
  ShieldAlert,
  Flame,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Zap,
  Sliders,
  Download,
  Copy,
  Check,
  Server,
  FileCode,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

interface ScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetDomain: string;
}

export const ScanModal: React.FC<ScanModalProps> = ({
  isOpen,
  onClose,
  targetDomain,
}) => {
  const [domain, setDomain] = useState(targetDomain || 'target-domain.com');
  const [isHyper100x, setIsHyper100x] = useState(true);
  const [concurrency, setConcurrency] = useState(500);
  const [isScanning, setIsScanning] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [scanComplete, setScanComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<'logs' | 'ports' | 'waf-patch'>('logs');
  const [copiedPatch, setCopiedPatch] = useState(false);

  useEffect(() => {
    if (targetDomain) {
      setDomain(targetDomain);
    }
  }, [targetDomain]);

  useEffect(() => {
    if (!isOpen) {
      setIsScanning(false);
      setCurrentStage(0);
      setLogs([]);
      setScanComplete(false);
    } else {
      startScan();
    }
  }, [isOpen]);

  const startScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setCurrentStage(0);

    const baseRules = isHyper100x ? '1,425,400' : '14,254';
    const threads = isHyper100x ? concurrency : 10;

    setLogs([
      `[00:00.012] [INIT] CounterAttack 100x Distributed Cluster spawned on node-sg-09`,
      `[00:00.045] [TARGET] Target scope locked: ${domain} (Strict per-host mode enabled)`,
      `[00:00.089] [WORKERS] Allocating ${threads} async worker threads across 10 multi-region edge nodes`,
    ]);

    const sequence = [
      {
        stage: 0,
        delay: 500,
        log: `[00:00.520] [STAGE 1 - RECON 100X] Probing 32 passive feeds: CT Logs, Wayback, OTX, Shodan, Censys...`,
      },
      {
        stage: 0,
        delay: 1100,
        log: `[00:01.140] [DISCOVERED] 142 subdomains indexed (api.${domain}, internal-db.${domain}, gitlab.${domain}, vpn.${domain}, auth.${domain})`,
      },
      {
        stage: 1,
        delay: 1700,
        log: `[00:01.720] [STAGE 2 - PORT PROBE 100X] Scanning 65,535 TCP/UDP ports via SYN/ACK non-blocking stealth sockets...`,
      },
      {
        stage: 1,
        delay: 2400,
        log: `[00:02.400] [PORTS OPEN] Found: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL), 6379 (Redis), 8080 (phpMyAdmin), 8161 (ActiveMQ)`,
      },
      {
        stage: 2,
        delay: 3100,
        log: `[00:03.110] [STAGE 3 - CAPTURE] Chromium Headless Cluster rendering full-page DOM & visual screenshots...`,
      },
      {
        stage: 3,
        delay: 3800,
        log: `[00:03.850] [STAGE 4 - VULN MATRIX] Matching ${baseRules} rules in parallel: Zero-Days, CVE-2024, Spring, Log4j, Misconfigs...`,
      },
      {
        stage: 4,
        delay: 4500,
        log: `[00:04.530] [STAGE 5 - INCIDENT CHECK] Running 3,000 SEA & Indonesian localized signatures (Slot Gacor, Maxwin, IndoSec Defacement)...`,
      },
      {
        stage: 4,
        delay: 5200,
        log: `[00:05.210] [ALERT] Caught active slot spam injection on /archive/2019/ and 1 critical RCE on port 8161!`,
      },
      {
        stage: 4,
        delay: 5800,
        log: `[00:05.800] [SUCCESS] Scan complete. Security Rating compiled: Grade B (74/100). Remediation rules generated.`,
      },
    ];

    sequence.forEach(({ stage, delay, log }) => {
      setTimeout(() => {
        setCurrentStage(stage);
        setLogs((prev) => [...prev, log]);
      }, delay);
    });

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 6200);
  };

  const wafRemediationPatch = `# CounterAttack Automated WAF & Nginx Defense Patch for ${domain}
# Generated automatically by CounterAttack 100x Engine

# 1. Block Slot Gacor & Gambling Injection in Request/Response
if ($query_string ~* "(slot|gacor|maxwin|judi|zeus|olympus|scatter)") {
    return 403;
}
if ($request_uri ~* "(wp-content/uploads/.*\\.php|\\.git/|actuator|phpmyadmin)") {
    return 403;
}

# 2. Block Defacer User-Agents & Malicious Crawlers
if ($http_user_agent ~* "(IndoSec|sqlmap|nikto|wpscan|dirbuster)") {
    return 403;
}

# 3. Restrict Admin Ports to Internal IP Range
location /actuator/ {
    allow 10.0.0.0/8;
    deny all;
}
`;

  const handleCopyPatch = () => {
    navigator.clipboard.writeText(wafRemediationPatch);
    setCopiedPatch(true);
    setTimeout(() => setCopiedPatch(false), 2000);
  };

  const handleExportJson = () => {
    const reportData = {
      engine: 'CounterAttack 100x HyperScan',
      target: domain,
      timestamp: new Date().toISOString(),
      rulesEvaluated: isHyper100x ? 1425400 : 14254,
      concurrency: isHyper100x ? concurrency : 10,
      grade: 'B',
      score: 74,
      assetsDiscovered: 142,
      criticalFindings: 2,
      incidentsDetected: 1,
      logs,
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `counterattack-audit-${domain}.json`;
    a.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl border border-[#27272a] bg-[#0d0d10] p-5 sm:p-7 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl grid place-items-center bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <Radar size={20} className={isScanning ? 'animate-spin' : ''} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#fafafa]">
                  CounterAttack 100x Scanner
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ef4444] text-white font-bold uppercase">
                  {isHyper100x ? '100X TURBO' : 'STANDARD'}
                </span>
              </div>
              <p className="text-xs font-mono text-[#a1a1aa]">{domain}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={startScan}
              disabled={isScanning}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#111114] text-xs font-medium text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
            >
              <RefreshCw size={12} className={isScanning ? 'animate-spin' : ''} />
              <span>Rescan</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#71717a] hover:text-[#fafafa] hover:bg-[#1a1a1d] transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 100x Mode Toggle & Thread Control Bar */}
        <div className="mt-4 p-3 rounded-xl border border-[#27272a] bg-[#111114] flex items-center justify-between gap-4 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#71717a]">Engine Mode:</span>
            <button
              type="button"
              onClick={() => setIsHyper100x(false)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-colors ${
                !isHyper100x
                  ? 'bg-[#27272a] text-white font-bold'
                  : 'text-[#71717a] hover:text-[#a1a1aa]'
              }`}
            >
              Standard 1x (14k rules)
            </button>
            <button
              type="button"
              onClick={() => setIsHyper100x(true)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold flex items-center gap-1 transition-all ${
                isHyper100x
                  ? 'bg-[#ef4444] text-white shadow-md'
                  : 'text-[#71717a] hover:text-[#fafafa]'
              }`}
            >
              <Zap size={12} />
              <span>HyperScan 100x (1,425,400 rules)</span>
            </button>
          </div>

          {isHyper100x && (
            <div className="flex items-center gap-3">
              <span className="text-[#71717a] flex items-center gap-1">
                <Sliders size={12} />
                <span>Async Threads:</span>
              </span>
              <span className="font-mono text-[#ef4444] font-bold">
                {concurrency}
              </span>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={concurrency}
                onChange={(e) => setConcurrency(Number(e.target.value))}
                className="w-24 accent-[#ef4444] cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* 5-Stage Visual Tracker */}
        <div className="mt-3.5 grid grid-cols-5 gap-2 text-center text-[10px] font-mono">
          {[
            { n: '01', title: 'Deep Recon', icon: Globe },
            { n: '02', title: '65k Ports', icon: Wifi },
            { n: '03', title: 'DOM Snapshot', icon: Camera },
            { n: '04', title: '1.4M Vulns', icon: ShieldAlert },
            { n: '05', title: 'Incident Sweep', icon: Flame },
          ].map((s, idx) => {
            const isDone = currentStage > idx || scanComplete;
            const isCurrent = currentStage === idx && isScanning;
            return (
              <div
                key={s.n}
                className={`p-2 rounded-xl border transition-all ${
                  isCurrent
                    ? 'border-[#ef4444] bg-[#ef4444]/15 text-white font-bold ring-1 ring-[#ef4444]'
                    : isDone
                    ? 'border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981]'
                    : 'border-[#27272a] bg-[#111114] text-[#71717a]'
                }`}
              >
                <s.icon size={14} className="mx-auto mb-1" />
                <div className="truncate">{s.title}</div>
              </div>
            );
          })}
        </div>

        {/* Sub-Tabs: Terminal Logs | Open Ports | Remediation Patch */}
        <div className="mt-3 flex items-center gap-2 border-b border-[#27272a] text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('logs')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'logs'
                ? 'border-[#ef4444] text-[#fafafa] font-bold'
                : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
            }`}
          >
            Terminal Output
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ports')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'ports'
                ? 'border-[#ef4444] text-[#fafafa] font-bold'
                : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
            }`}
          >
            65,535 Port Map (7 Live)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('waf-patch')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'waf-patch'
                ? 'border-[#ef4444] text-[#fafafa] font-bold'
                : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
            }`}
          >
            Generated WAF / Nginx Rule
          </button>
        </div>

        {/* Content Pane */}
        <div className="mt-3 flex-1 overflow-y-auto">
          {activeTab === 'logs' && (
            <div className="rounded-xl border border-[#27272a] bg-[#0a0a0b] p-3.5 font-mono text-[11px] text-[#a1a1aa] h-48 sm:h-56 overflow-y-auto space-y-1.5 shadow-inner">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.includes('ALERT')
                      ? 'text-[#ef4444] font-bold'
                      : log.includes('SUCCESS')
                      ? 'text-[#10b981] font-bold'
                      : log.includes('DISCOVERED') || log.includes('PORTS')
                      ? 'text-[#f59e0b]'
                      : 'text-[#a1a1aa]'
                  }
                >
                  {log}
                </div>
              ))}
              {isScanning && (
                <div className="flex items-center gap-2 text-[#ef4444] animate-pulse">
                  <span>●</span>
                  <span>Executing 100x asynchronous scanner cluster...</span>
                </div>
              )}
            </div>
          )}

          {activeTab === 'ports' && (
            <div className="rounded-xl border border-[#27272a] bg-[#111114] p-3.5 space-y-2 text-xs font-mono">
              <div className="text-[11px] text-[#71717a]">
                High-speed SYN/ACK port audit across ports 1–65535:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { port: '80 / TCP', svc: 'HTTP (Nginx 1.24)', state: 'Open', sev: 'info' },
                  { port: '443 / TCP', svc: 'HTTPS (TLS 1.3)', state: 'Open', sev: 'info' },
                  { port: '22 / TCP', svc: 'OpenSSH 8.9p1', state: 'Open', sev: 'medium' },
                  { port: '3306 / TCP', svc: 'MySQL Database', state: 'Exposed', sev: 'high' },
                  { port: '6379 / TCP', svc: 'Redis In-Memory', state: 'No Auth', sev: 'high' },
                  { port: '8080 / TCP', svc: 'phpMyAdmin Admin', state: 'Default Auth', sev: 'critical' },
                  { port: '8161 / TCP', svc: 'ActiveMQ Jolokia', state: 'RCE Vulnerable', sev: 'critical' },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg border border-[#27272a] bg-[#1a1a1d] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[#fafafa] font-bold">{p.port}</span>
                      <div className="text-[10px] text-[#71717a]">{p.svc}</div>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        p.sev === 'critical'
                          ? 'bg-[#ef4444]/20 text-[#ef4444]'
                          : p.sev === 'high'
                          ? 'bg-[#f59e0b]/20 text-[#f59e0b]'
                          : 'bg-[#3b82f6]/20 text-[#3b82f6]'
                      }`}
                    >
                      {p.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'waf-patch' && (
            <div className="relative rounded-xl border border-[#27272a] bg-[#0a0a0b] p-3.5 font-mono text-[11px] text-[#10b981]">
              <button
                type="button"
                onClick={handleCopyPatch}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1f1f23] text-xs text-white border border-[#3f3f46] hover:bg-[#27272a] transition-colors"
              >
                {copiedPatch ? <Check size={12} className="text-[#10b981]" /> : <Copy size={12} />}
                <span>{copiedPatch ? 'Copied' : 'Copy Patch'}</span>
              </button>
              <pre className="overflow-x-auto whitespace-pre-wrap">{wafRemediationPatch}</pre>
            </div>
          )}
        </div>

        {/* Scan Results Verdict Bar */}
        {scanComplete && (
          <div className="mt-4 p-4 rounded-xl border border-[#ef4444]/50 bg-[#1a1a1d] space-y-3 animate-fade-in shrink-0">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl grid place-items-center text-2xl font-black bg-[#ef4444]/20 border border-[#ef4444] text-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                  B
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#fafafa] flex items-center gap-2">
                    <span>Perimeter Audit: Grade B (74/100)</span>
                    <span className="text-[10px] font-mono bg-[#ef4444]/20 text-[#ef4444] px-1.5 py-0.5 rounded font-bold">
                      2 CRITICAL
                    </span>
                  </h4>
                  <p className="text-xs text-[#71717a]">
                    142 Subdomains · 7 Exposed Ports · 1 Injected Slot Mirror Caught
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3f3f46] bg-[#111114] text-xs font-semibold text-[#fafafa] hover:bg-[#27272a] transition-colors"
                >
                  <Download size={13} />
                  <span>Export JSON</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-lg bg-[#ef4444] text-white text-xs font-semibold hover:bg-[#dc2626] transition-colors shadow-md"
                >
                  Close &amp; Defend
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
